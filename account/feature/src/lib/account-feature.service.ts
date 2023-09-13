import {CreateUserDialog, UpdateUserDialog} from './components'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator'
import {DestroyRef, Injectable} from '@angular/core'
import {MatDialog} from '@angular/material/dialog'
import {MatSort} from '@angular/material/sort'
import {Order} from '@dev/shared-util-data'
import {FormControl} from '@angular/forms'
import {
  User,
  UserFacade,
  CreateUser,
  UpdateUser,
} from '@dev/account-data-access'
import {debounceTime} from 'rxjs'
import {SelectionModel} from '@angular/cdk/collections'

const columns = ['id', 'name', 'createdAt', 'updatedAt']

@Injectable()
export class AccountFeatureService {
  readonly search = new FormControl()

  readonly columns = new FormControl(columns)

  readonly columnList = [
    {text: 'id', value: 'id'},
    {text: 'nome', value: 'name'},
    {text: 'criado em', value: 'createdAt'},
    {text: 'alterado em', value: 'updatedAt'},
  ]

  readonly dataSource = new MatTableDataSource<User>()

  get meta$() {
    return this.facade.meta$
  }

  selection = new SelectionModel<User>(true, [])

  constructor(
    private readonly dialog: MatDialog,
    private readonly facade: UserFacade
  ) {}

  initialize(paginator: MatPaginator, sort: MatSort, destroyRef: DestroyRef) {
    const pagination$ = paginator.page.pipe(takeUntilDestroyed(destroyRef))

    const sorted$ = sort.sortChange.pipe(takeUntilDestroyed(destroyRef))

    const items$ = this.facade.data$.pipe(takeUntilDestroyed(destroyRef))

    pagination$.subscribe((value) => {
      const order = sort.direction ? Order.ASC : Order.DESC
      this.getUser(sort.active, order, value.pageIndex)
    })

    sorted$.subscribe((value) => {
      const order = value.direction ? Order.ASC : Order.DESC
      this.getUser(value.active, order, paginator.pageIndex)
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

  openCreateDialog() {
    return this.dialog.open<CreateUserDialog, void, CreateUser>(
      CreateUserDialog
    )
  }

  createUser() {
    const ref = this.openCreateDialog()
    ref.componentInstance.message$ = this.facade.warning$
    ref.componentInstance.form.submitted$.subscribe((value) => {
      if (value) {
        this.facade.create(value)
        ref.close()
      }
    })
  }

  openUpdateDialog(data: User) {
    return this.dialog.open<UpdateUserDialog, User, UpdateUser>(
      UpdateUserDialog,
      {data}
    )
  }

  updateUser(data: User) {
    const ref = this.openUpdateDialog(data)
    ref.componentInstance.message$ = this.facade.warning$
    ref.componentInstance.form.submitted$.subscribe((value) => {
      if (value) {
        this.facade.update(value)
        ref.close()
      }
    })
  }

  filterUser(where: Record<string, string>) {
    this.facade.filter({where})
  }

  getUser(sort: string, order: Order, page: number) {
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
