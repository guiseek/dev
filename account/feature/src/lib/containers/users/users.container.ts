import {
  inject,
  Component,
  ViewChild,
  DestroyRef,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core'
import {User, UserFacade, UpdateUser} from '@dev/account-data-access'
import {
  CreateUserDialog,
  UpdateUserDialog,
  UpdatePasswordDialog,
} from '../../components'
import {Columns, FeatureContainer} from '@dev/shared-ui-base'
import {FilterByFieldOption} from '@dev/shared-ui-forms'
import {MatPaginator} from '@angular/material/paginator'
import {MatSnackBar} from '@angular/material/snack-bar'
import {MatDialog} from '@angular/material/dialog'
import {MatSort} from '@angular/material/sort'
import {FormControl} from '@angular/forms'

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
  columns = new FormControl<Columns<User>>([
    'select',
    'name',
    'createdAt',
    'actions',
  ])

  columnList: FilterByFieldOption[] = [
    {text: 'nome', value: 'name', type: 'text'},
  ]

  readonly destroyRef = inject(DestroyRef)
  readonly facade = inject(UserFacade)
  readonly dialog = inject(MatDialog)
  readonly snackBar = inject(MatSnackBar)

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

  onUpdatePassword(data: User) {
    const ref = this.openUpdatePasswordDialog(data)
    ref.componentInstance.message$ = this.facade.warning$
    ref.componentInstance.form.submitted$.subscribe((value) => {
      if (value) {
        this.facade.updatePassword(value)
        ref.close()
      }
    })
  }

  openUpdatePasswordDialog(data: User) {
    return this.dialog.open<UpdatePasswordDialog>(UpdatePasswordDialog, {
      data,
    })
  }
}
