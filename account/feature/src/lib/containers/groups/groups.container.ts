import {
  inject,
  Component,
  ViewChild,
  DestroyRef,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core'
import {Group, GroupFacade, UpdateGroup} from '@dev/account-data-access'
import {CreateGroupDialog, UpdateGroupDialog} from '../../components'
import {Columns, FeatureContainer} from '@dev/shared-ui-base'
import {FilterByFieldOption} from '@dev/shared-ui-forms'
import {MatPaginator} from '@angular/material/paginator'
import {MatDialog} from '@angular/material/dialog'
import {MatSort} from '@angular/material/sort'
import {FormControl} from '@angular/forms'
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'dev-groups',
  templateUrl: './groups.container.html',
  styleUrls: ['./groups.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupsContainer
  extends FeatureContainer<Group>
  implements AfterViewInit
{
  columns = new FormControl<Columns<Group>>([
    'select',
    'id',
    'name',
    'label',
    'permission',
    'createdAt',
    'updatedAt',
    'actions',
  ])

  columnList: FilterByFieldOption[] = [
    {
      text: 'id',
      value: 'id',
      type: 'text',
    },
    {
      text: 'nome',
      value: 'name',
      type: 'text',
    },
    {
      text: 'rótulo',
      value: 'label',
      type: 'text',
    },
    {
      text: 'permissão',
      value: 'permission',
      type: 'number',
    },
    {
      text: 'data de criação',
      value: 'createdAt',
      type: 'date',
    },
    {
      text: 'data de alteração',
      value: 'updatedAt',
      type: 'date',
    },
  ]

  readonly destroyRef = inject(DestroyRef)
  readonly snackBar = inject(MatSnackBar)
  readonly facade = inject(GroupFacade)
  readonly dialog = inject(MatDialog)

  @ViewChild(MatPaginator)
  paginator: MatPaginator

  @ViewChild(MatSort)
  sort: MatSort

  ngAfterViewInit() {
    this.initialize()
  }

  openCreateDialog() {
    return this.dialog.open<CreateGroupDialog>(CreateGroupDialog)
  }

  openUpdateDialog(data: Group) {
    return this.dialog.open<UpdateGroupDialog, UpdateGroup>(UpdateGroupDialog, {
      data,
    })
  }
}
