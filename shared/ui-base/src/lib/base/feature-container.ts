import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {MatDialog, MatDialogRef} from '@angular/material/dialog'
import {Entity, Facade, Order, Where} from '@dev/shared-util-data'
import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator'
import {MatSnackBar} from '@angular/material/snack-bar'
import {DestroyRef, Directive} from '@angular/core'
import {MatSort} from '@angular/material/sort'
import {FormControl} from '@angular/forms'
import {FormDialog} from './form-dialog'
import {SelectionMenu} from '../components'
import {ListSelectable} from './list-selectable'

interface FieldOption {
  text: string
  value: string
}

export type Columns<T extends object> = ('select' | 'actions' | keyof T)[]

@Directive()
export abstract class FeatureContainer<T extends Entity> {
  abstract readonly columns: FormControl<Columns<T> | null>

  abstract readonly columnList: FieldOption[]

  abstract readonly dialog: MatDialog
  abstract readonly facade: Facade<T>

  abstract readonly destroyRef: DestroyRef
  abstract readonly paginator: MatPaginator
  abstract readonly snackBar: MatSnackBar
  abstract readonly sort: MatSort

  list?: ListSelectable<T>

  readonly dataSource = new MatTableDataSource<T>()

  get meta$() {
    return this.facade.meta$
  }

  selection = new SelectionMenu<T>(true, [])

  initialize() {
    const pagination$ = (
      this.list ? this.list.paginator : this.paginator
    ).page.pipe(takeUntilDestroyed(this.destroyRef))

    const sorted$ = (this.list ? this.list.sort : this.sort).sortChange.pipe(
      takeUntilDestroyed(this.destroyRef)
    )

    const items$ = this.facade.data$.pipe(takeUntilDestroyed(this.destroyRef))

    const warnings$ = this.facade.warning$.pipe(
      takeUntilDestroyed(this.destroyRef)
    )

    pagination$.subscribe((value) => {
      const order = this.sort.direction ? Order.ASC : Order.DESC
      this.update(this.sort.active, order, value.pageIndex)
    })

    sorted$.subscribe((value) => {
      const order = value.direction ? Order.ASC : Order.DESC
      this.update(value.active, order, this.paginator.pageIndex)
    })

    items$.subscribe((data) => {
      this.selection.clear()
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
      this.dataSource.data = data
    })

    warnings$.subscribe((warnings) => {
      if (warnings) this.snackBar.open(warnings, 'OK', {duration: 6000})
    })

    this.facade.find()
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

  filter(where: Where<T>) {
    this.facade.filter({where})
  }

  update(sort: string, order: Order, page: number) {
    this.facade.find({options: {page: page + 1, sort, order}})
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
