import {
  inject,
  Component,
  ViewChild,
  DestroyRef,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {FormControl, FormGroupDirective} from '@angular/forms'
import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator'
import {ContentFacade} from '@dev/content-data-access'
import {MatSort} from '@angular/material/sort'
import {Content} from '@dev/content-domain'
import {Order} from '@dev/shared-util-data'
import {ContentForm} from './forms'
import {debounceTime} from 'rxjs'

const columns = ['id', 'title', 'path', 'createdAt', 'updatedAt']

@Component({
  selector: 'dev-content-feature',
  templateUrl: './content-feature.container.html',
  styleUrls: ['./content-feature.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentFeatureContainer implements AfterViewInit {
  @ViewChild(FormGroupDirective)
  formGroup: FormGroupDirective

  @ViewChild(MatPaginator)
  paginator: MatPaginator

  @ViewChild(MatSort)
  sort: MatSort

  searchControl = new FormControl()

  columnsControl = new FormControl(columns)

  columns = [
    {text: 'Id', value: 'id'},
    {text: 'Título', value: 'title'},
    {text: 'Caminho', value: 'path'},
    {text: 'Criado em', value: 'createdAt'},
    {text: 'Alterado em', value: 'updatedAt'},
  ]

  destroyRef = inject(DestroyRef)

  readonly facade = inject(ContentFacade)

  readonly dataSource = new MatTableDataSource<Content>()

  readonly form = new ContentForm()

  ngAfterViewInit() {
    this.facade.find()

    this.searchControl.valueChanges
      .pipe(debounceTime(600), takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.facade.filter({where: {title: value}}))

    this.facade.data$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
        this.dataSource.data = data
      })

    this.sort.sortChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        const order = value.direction ? Order.ASC : Order.DESC
        this.getContent(value.active, order, this.paginator.pageIndex)
      })

    this.paginator.page
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        const order = this.sort.direction ? Order.ASC : Order.DESC
        this.getContent(this.sort.active, order, value.pageIndex)
      })
  }

  getContent(sort: string, order: Order, page: number) {
    this.facade.find({options: {page, sort, order}})
  }

  onSubmit() {
    if (this.form.valid) {
      this.facade.create(this.form.getRawValue())
      this.formGroup.resetForm({})
    } else {
      this.form.markAllAsTouched()
    }
  }
}
