import {
  inject,
  Component,
  ViewChild,
  DestroyRef,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core'
import {FormControl} from '@angular/forms'
import {MatSort} from '@angular/material/sort'
import {MatDialog} from '@angular/material/dialog'
import {MatPaginator} from '@angular/material/paginator'
import {UpdateUser, User, UserFacade} from '@dev/account-data-access'
import {FilterByFieldOption} from '@dev/shared-ui-forms'
import {Columns, FeatureContainer} from '@dev/shared-ui-base'
import {CreateUserDialog, UpdateUserDialog} from '../../components'

@Component({
  selector: 'dev-users',
  templateUrl: './users.container.html',
  styleUrls: ['./users.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersContainer
  extends FeatureContainer<User>
  implements AfterViewInit
{
  columnList: FilterByFieldOption[] = [
    {text: 'nome', value: 'name', type: 'text'},
  ]

  readonly columns = new FormControl<Columns<User>>([
    'select',
    'name',
    'createdAt',
    'updatedAt',
  ])

  readonly destroyRef = inject(DestroyRef)
  readonly facade = inject(UserFacade)
  readonly dialog = inject(MatDialog)

  @ViewChild(MatPaginator)
  paginator: MatPaginator

  @ViewChild(MatSort)
  sort: MatSort

  ngAfterViewInit() {
    this.initialize()
  }

  openCreateDialog() {
    return this.dialog.open<CreateUserDialog>(CreateUserDialog)
  }

  openUpdateDialog(data: User) {
    return this.dialog.open<UpdateUserDialog, UpdateUser>(UpdateUserDialog, {
      data,
    })
  }
}
