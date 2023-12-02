import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {SharedMaterial, UiBaseModule} from '@dev/shared-ui-base'
import {UiFormsModule} from '@dev/shared-ui-forms'
import {ReactiveFormsModule} from '@angular/forms'
import {accountFeatureRoutes} from './account-feature.routes'
import {AccountFeatureContainer} from './account-feature.container'
import {UsersContainer, GroupsContainer} from './containers'
import {
  CreateUserDialog,
  UpdateUserDialog,
  CreateGroupDialog,
  UpdateGroupDialog,
  UpdatePasswordDialog,
  PermissionComponent,
} from './components'

@NgModule({
  imports: [
    CommonModule,
    UiBaseModule,
    UiFormsModule,
    SharedMaterial,
    ReactiveFormsModule,

    RouterModule.forChild(accountFeatureRoutes),
  ],
  declarations: [
    AccountFeatureContainer,
    UsersContainer,
    CreateUserDialog,
    UpdateUserDialog,
    UpdatePasswordDialog,
    GroupsContainer,
    CreateGroupDialog,
    UpdateGroupDialog,
    PermissionComponent,
  ],
})
export class AccountFeatureModule {}
