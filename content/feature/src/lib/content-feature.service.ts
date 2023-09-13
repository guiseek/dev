import {CreateContentDialog, UpdateContentDialog} from './components'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator'
import {SelectionModel} from '@angular/cdk/collections'
import {DestroyRef, Injectable} from '@angular/core'
import {MatDialog} from '@angular/material/dialog'
import {MatSort} from '@angular/material/sort'
import {FormControl} from '@angular/forms'
import {Order} from '@dev/shared-util-data'
import {
  Content,
  ContentFacade,
  CreateContent,
  UpdateContent,
} from '@dev/content-data-access'

const columns = ['select', 'title', 'path', 'createdAt', 'actions']

@Injectable()
export class ContentFeatureService {
  readonly columns = new FormControl(columns)

  readonly columnList = [
    {text: 'id', value: 'id'},
    {text: 'título', value: 'title'},
    {text: 'caminho', value: 'path'},
    {text: 'criado em', value: 'createdAt'},
    {text: 'alterado em', value: 'updatedAt'},
  ]

  readonly dataSource = new MatTableDataSource<Content>()

  get meta$() {
    return this.facade.meta$
  }

  selection = new SelectionModel<Content>(true, [])

  constructor(
    private readonly dialog: MatDialog,
    private readonly facade: ContentFacade
  ) {}

  initialize(paginator: MatPaginator, sort: MatSort, destroyRef: DestroyRef) {
    const pagination$ = paginator.page.pipe(takeUntilDestroyed(destroyRef))

    const sorted$ = sort.sortChange.pipe(takeUntilDestroyed(destroyRef))

    const items$ = this.facade.data$.pipe(takeUntilDestroyed(destroyRef))

    pagination$.subscribe((value) => {
      const order = sort.direction ? Order.ASC : Order.DESC
      this.getContent(sort.active, order, value.pageIndex)
    })

    sorted$.subscribe((value) => {
      const order = value.direction ? Order.ASC : Order.DESC
      this.getContent(value.active, order, paginator.pageIndex)
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
    return this.dialog.open<CreateContentDialog, void, CreateContent>(
      CreateContentDialog
    )
  }

  createContent() {
    const ref = this.openCreateDialog()
    ref.componentInstance.message$ = this.facade.warning$
    ref.componentInstance.form.submitted$.subscribe((value) => {
      if (value) {
        this.facade.create(value)
        ref.close()
      }
    })
  }

  openUpdateDialog(data: Content) {
    return this.dialog.open<UpdateContentDialog, Content, UpdateContent>(
      UpdateContentDialog,
      {data}
    )
  }

  updateContent(data: Content) {
    const ref = this.openUpdateDialog(data)
    ref.componentInstance.message$ = this.facade.warning$
    ref.componentInstance.form.submitted$.subscribe((value) => {
      if (value) {
        this.facade.update(value)
        ref.close()
      }
    })
  }

  filterContent(where: Record<string, string>) {
    this.facade.filter({where})
  }

  getContent(sort: string, order: Order, page: number) {
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
