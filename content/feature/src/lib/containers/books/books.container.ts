import {
  inject,
  Component,
  ViewChild,
  DestroyRef,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core'
import {Book, BookFacade, UpdateBook} from '@dev/content-data-access'
import {CreateBookDialog, UpdateBookDialog} from '../../components'
import {Columns, FeatureContainer} from '@dev/shared-ui-base'
import {FilterByFieldOption} from '@dev/shared-ui-forms'
import {MatPaginator} from '@angular/material/paginator'
import {MatDialog} from '@angular/material/dialog'
import {MatSort} from '@angular/material/sort'
import {FormControl} from '@angular/forms'

@Component({
  selector: 'dev-books',
  templateUrl: './books.container.html',
  styleUrls: ['./books.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksContainer
  extends FeatureContainer<Book>
  implements AfterViewInit
{
  columns = new FormControl<Columns<Book>>([
    'select',
    'name',
    'createdAt',
    'actions',
  ])

  columnList: FilterByFieldOption[] = [
    {text: 'Nome', value: 'name', type: 'text'},
  ]

  readonly destroyRef = inject(DestroyRef)
  readonly facade = inject(BookFacade)
  readonly dialog = inject(MatDialog)

  @ViewChild(MatPaginator)
  paginator: MatPaginator

  @ViewChild(MatSort)
  sort: MatSort

  ngAfterViewInit() {
    this.initialize()
  }

  openCreateDialog() {
    return this.dialog.open<CreateBookDialog>(CreateBookDialog)
  }

  openUpdateDialog(data: Book) {
    return this.dialog.open<UpdateBookDialog, UpdateBook>(UpdateBookDialog, {
      data,
    })
  }
}
