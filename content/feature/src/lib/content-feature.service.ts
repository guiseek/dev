import {CreateContentDialog, UpdateContentDialog} from './components'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator'
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
import {debounceTime} from 'rxjs'

const columns = ['id', 'title', 'path', 'createdAt', 'updatedAt', 'actions']

@Injectable()
export class ContentFeatureService {
  readonly search = new FormControl()

  readonly columns = new FormControl(columns)

  readonly columnList = [
    {text: 'Id', value: 'id'},
    {text: 'Título', value: 'title'},
    {text: 'Caminho', value: 'path'},
    {text: 'Criado em', value: 'createdAt'},
    {text: 'Alterado em', value: 'updatedAt'},
    {text: 'Ações', value: 'actions'},
  ]

  readonly dataSource = new MatTableDataSource<Content>()

  get meta$() {
    return this.facade.meta$
  }

  constructor(
    private readonly dialog: MatDialog,
    private readonly facade: ContentFacade
  ) {}

  initialize(paginator: MatPaginator, sort: MatSort, destroyRef: DestroyRef) {
    const pagination$ = paginator.page.pipe(takeUntilDestroyed(destroyRef))

    const sorted$ = sort.sortChange.pipe(takeUntilDestroyed(destroyRef))

    const items$ = this.facade.data$.pipe(takeUntilDestroyed(destroyRef))

    const search$ = this.search.valueChanges.pipe(
      debounceTime(600),
      takeUntilDestroyed(destroyRef)
    )

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

    search$.subscribe((value) => this.facade.filter({where: {title: value}}))

    this.facade.find()
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

  getContent(sort: string, order: Order, page: number) {
    this.facade.find({options: {page: page + 1, sort, order}})
  }

  remove(id: string) {
    this.facade.remove(id)
  }
}
