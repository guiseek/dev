import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {MatDialog, MatDialogRef} from '@angular/material/dialog'
import {Entity, Facade, Order, Where} from '@dev/shared-util-data'
import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator'
import {DestroyRef, Directive} from '@angular/core'
import {MatSort} from '@angular/material/sort'
import {FormControl} from '@angular/forms'
import {FormDialog} from './form-dialog'
import {SelectionMenu} from '../components'
import 'reflect-metadata'

interface FieldOption {
  text: string
  value: string
}

export type Columns<T extends object> = ('select' | 'actions' | keyof T)[]

function store(confirm: boolean) {
  return function <T>(
    target: T,
    property: PropertyKey,
    descriptor: PropertyDescriptor
  ) {
    console.log(target, property, descriptor)
    const method = descriptor.value
    descriptor.value = function (...params: unknown[]) {
      console.log(params);
      
      method.apply(this, params)
    }

    return descriptor
  }
}

@Directive()
export abstract class FeatureContainer<T extends Entity> {
  abstract readonly name: string

  abstract readonly columns: FormControl<Columns<T> | null>

  abstract readonly columnList: FieldOption[]

  abstract readonly dialog: MatDialog
  abstract readonly facade: Facade<T>

  abstract readonly destroyRef: DestroyRef

  abstract readonly paginator: MatPaginator
  abstract readonly sort: MatSort

  readonly dataSource = new MatTableDataSource<T>()

  get meta$() {
    return this.facade.meta$
  }

  selection = new SelectionMenu<T>(true, [])

  initialize() {
    const pagination$ = this.paginator.page.pipe(
      takeUntilDestroyed(this.destroyRef)
    )

    const sorted$ = this.sort.sortChange.pipe(
      takeUntilDestroyed(this.destroyRef)
    )

    const items$ = this.facade.data$.pipe(takeUntilDestroyed(this.destroyRef))

    pagination$.subscribe((value) => {
      const order = this.sort.direction.toUpperCase() as Order
      this.update(this.sort.active, order, value.pageIndex, value.pageSize)
    })

    sorted$.subscribe((value) => {
      const {pageIndex, pageSize} = this.paginator
      const order = value.direction.toUpperCase() as Order
      this.update(value.active, order, pageIndex, pageSize)
    })

    items$.subscribe((data) => {
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
      this.dataSource.data = data
    })

    this.facade.find()
    this.selection.hasValue()
  }

  get columnsHasSelect() {
    const columns = this.columns.value ?? []
    return columns.includes('select')
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length
    const numRows = this.dataSource.data.length
    return numSelected === numRows
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear()
      return
    }

    this.selection.select(...this.dataSource.data)
  }

  abstract openCreateDialog(): MatDialogRef<FormDialog<any>>
  abstract openUpdateDialog(data: T): MatDialogRef<FormDialog<any>>

  onCreate() {
    const ref = this.openCreateDialog()
    ref.componentInstance.message$ = this.facade.warning$
    ref.componentInstance.form.submitted$.subscribe((value) => {
      if (value) {
        this.facade.create(value)
        ref.close()
      }
    })
  }

  onUpdate(data: T) {
    const ref = this.openUpdateDialog(data)
    ref.componentInstance.message$ = this.facade.warning$
    ref.componentInstance.form.submitted$.subscribe((value) => {
      if (value) {
        this.facade.update(value)
        ref.close()
      }
    })
  }

  @store(true)
  filter(where: Where<T>) {
    this.facade.filter({where})
    this.selection.clear()
  }

  update(sort: string, order: Order, page: number, take = 10) {
    this.facade.find({options: {page: page + 1, take, sort, order}})
  }

  remove(id: string) {
    this.facade.remove(id)
  }

  removeBulk() {
    if (this.selection.hasValue()) {
      const ids = this.selection.selected.map(({id}) => id)
      this.facade.removeBulk(ids)
      this.selection.clear()
    }
  }
}
