import {
  inject,
  Component,
  ViewChild,
  DestroyRef,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core'
import {MatPaginator} from '@angular/material/paginator'
import {FilterFieldsForm} from '@dev/shared-ui-forms'
import {MatSort} from '@angular/material/sort'
import {UpdateUser, User, UserFacade} from '@dev/account-data-access'
import {FeatureContainer} from '@dev/ui-base'
import {FormControl} from '@angular/forms'
import {MatDialog} from '@angular/material/dialog'
import {CreateUserDialog, UpdateUserDialog} from './components'

const columns = ['select', 'name', 'createdAt', 'updatedAt']

@Component({
  selector: 'dev-account-feature',
  templateUrl: './account-feature.container.html',
  styleUrls: ['./account-feature.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountFeatureContainer
  extends FeatureContainer<User>
  implements AfterViewInit
{
  columnList = [
    {text: 'nome', value: 'name'},
    {text: 'criado em', value: 'createdAt'},
    {text: 'alterado em', value: 'updatedAt'},
  ]

  readonly columns = new FormControl(columns)

  readonly destroyRef = inject(DestroyRef)
  readonly facade = inject(UserFacade)
  readonly dialog = inject(MatDialog)

  @ViewChild(MatPaginator)
  paginator: MatPaginator

  @ViewChild(MatSort)
  sort: MatSort

  filterForm = new FilterFieldsForm<User>(['name'])

  ngAfterViewInit() {
    this.initialize(this.paginator, this.sort, this.destroyRef)
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
