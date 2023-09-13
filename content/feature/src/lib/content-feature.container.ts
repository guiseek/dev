import {
  inject,
  Component,
  ViewChild,
  DestroyRef,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core'
import {CreateContentDialog, UpdateContentDialog} from './components'
import {Content, ContentFacade, UpdateContent} from '@dev/content-data-access'
import {MatPaginator} from '@angular/material/paginator'
import {FilterFieldsForm} from '@dev/shared-ui-forms'
import {MatDialog} from '@angular/material/dialog'
import {MatSort} from '@angular/material/sort'
import {FeatureContainer} from '@dev/ui-base'
import {FormControl} from '@angular/forms'

const columns = ['select', 'title', 'path', 'createdAt', 'actions']

@Component({
  selector: 'dev-content-feature',
  templateUrl: './content-feature.container.html',
  styleUrls: ['./content-feature.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentFeatureContainer
  extends FeatureContainer<Content>
  implements AfterViewInit
{
  columns = new FormControl(columns)

  columnList = [
    {text: 'título', value: 'title'},
    {text: 'caminho', value: 'path'},
    {text: 'criado em', value: 'createdAt'},
    {text: 'alterado em', value: 'updatedAt'},
  ]

  readonly destroyRef = inject(DestroyRef)
  readonly facade = inject(ContentFacade)
  readonly dialog = inject(MatDialog)

  @ViewChild(MatPaginator)
  paginator: MatPaginator

  @ViewChild(MatSort)
  sort: MatSort

  filterForm = new FilterFieldsForm<Content>(['title'])

  ngAfterViewInit() {
    this.initialize(this.paginator, this.sort, this.destroyRef)
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
