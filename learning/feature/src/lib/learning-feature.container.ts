import {
  inject,
  Component,
  ViewChild,
  DestroyRef,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core'
import {CreateRailDialog, UpdateRailDialog} from './components'
import {Rail, RailFacade, UpdateRail} from '@dev/learning-data-access'
import {Columns, FeatureContainer} from '@dev/shared-ui-base'
import {FilterByFieldOption} from '@dev/shared-ui-forms'
import {MatPaginator} from '@angular/material/paginator'
import {MatDialog} from '@angular/material/dialog'
import {MatSort} from '@angular/material/sort'
import {FormControl} from '@angular/forms'

@Component({
  selector: 'dev-learning-feature',
  templateUrl: './learning-feature.container.html',
  styleUrls: ['./learning-feature.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearningFeatureContainer
  extends FeatureContainer<Rail>
  implements AfterViewInit
{
  columns = new FormControl<Columns<Rail>>([
    'select',
    'name',
    'createdAt',
    'actions',
  ])

  columnList: FilterByFieldOption[] = [
    {text: 'nome', value: 'name', type: 'text'},
  ]

  readonly destroyRef = inject(DestroyRef)
  readonly facade = inject(RailFacade)
  readonly dialog = inject(MatDialog)

  @ViewChild(MatPaginator)
  paginator: MatPaginator

  @ViewChild(MatSort)
  sort: MatSort

  ngAfterViewInit() {
    this.initialize()
  }

  openCreateDialog() {
    return this.dialog.open<CreateRailDialog>(CreateRailDialog)
  }

  openUpdateDialog(data: Rail) {
    return this.dialog.open<UpdateRailDialog, UpdateRail>(UpdateRailDialog, {
      data,
    })
  }
}
