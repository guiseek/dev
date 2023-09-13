import {SelectionModel} from '@angular/cdk/collections'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {MatDialog, MatDialogRef} from '@angular/material/dialog'
import {Facade, Order, Where} from '@dev/shared-util-data'
import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator'
import {FilterFieldsForm} from '@dev/shared-ui-forms'
import {DestroyRef, Directive} from '@angular/core'
import {MatSort} from '@angular/material/sort'
import {FormControl} from '@angular/forms'
import {FormDialog} from './form-dialog'

interface FieldOption {
  text: string
  value: string
}

interface Entity {
  id: string
}

@Directive()
export abstract class FeatureContainer<T extends Entity> {
  abstract readonly columns: FormControl

  abstract readonly columnList: FieldOption[]
  abstract readonly filterForm: FilterFieldsForm<T>
  abstract readonly dialog: MatDialog
  abstract readonly facade: Facade<T>

  readonly dataSource = new MatTableDataSource<T>()

  get meta$() {
    return this.facade.meta$
  }

  selection = new SelectionModel<T>(true, [])

  initialize(paginator: MatPaginator, sort: MatSort, destroyRef: DestroyRef) {
    const pagination$ = paginator.page.pipe(takeUntilDestroyed(destroyRef))

    const sorted$ = sort.sortChange.pipe(takeUntilDestroyed(destroyRef))

    const items$ = this.facade.data$.pipe(takeUntilDestroyed(destroyRef))

    pagination$.subscribe((value) => {
      const order = sort.direction ? Order.ASC : Order.DESC
      this.update(sort.active, order, value.pageIndex)
    })

    sorted$.subscribe((value) => {
      const order = value.direction ? Order.ASC : Order.DESC
      this.update(value.active, order, paginator.pageIndex)
    })

    items$.subscribe((data) => {
      this.dataSource.paginator = paginator
      this.dataSource.sort = sort
      this.dataSource.data = data
    })

    this.facade.find()
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
