import {
  inject,
  Component,
  ViewChild,
  DestroyRef,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core'
import {Content, ContentFacade, UpdateContent} from '@dev/content-data-access'
import {CreateContentDialog, UpdateContentDialog} from '../../components'
import {Columns, FeatureContainer} from '@dev/shared-ui-base'
import {FilterByFieldOption} from '@dev/shared-ui-forms'
import {MatPaginator} from '@angular/material/paginator'
import {MatDialog} from '@angular/material/dialog'
import {MatSort} from '@angular/material/sort'
import {FormControl} from '@angular/forms'

@Component({
  selector: 'dev-contents',
  templateUrl: './contents.container.html',
  styleUrls: ['./contents.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentsContainer
  extends FeatureContainer<Content>
  implements AfterViewInit
{
  columns = new FormControl<Columns<Content>>([
    'select',
    'title',
    'path',
    'createdAt',
    'actions',
  ])

  columnList: FilterByFieldOption[] = [
    {text: 'título', value: 'title', type: 'text'},
    {text: 'caminho', value: 'path', type: 'text'},
  ]

  readonly destroyRef = inject(DestroyRef)
  readonly facade = inject(ContentFacade)
  readonly dialog = inject(MatDialog)

  @ViewChild(MatPaginator)
  paginator: MatPaginator

  @ViewChild(MatSort)
  sort: MatSort

  ngAfterViewInit() {
    this.initialize()
  }

  openCreateDialog() {
    return this.dialog.open<CreateContentDialog>(CreateContentDialog)
  }

  openUpdateDialog(data: Content) {
    return this.dialog.open<UpdateContentDialog, UpdateContent>(
      UpdateContentDialog,
      {data}
    )
  }
}
