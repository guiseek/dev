import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {UiFormsModule} from '@dev/shared-ui-forms'
import {MatButtonModule} from '@angular/material/button'
import {MatTableModule} from '@angular/material/table'
import {MatMenuModule} from '@angular/material/menu'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatDialogModule} from '@angular/material/dialog'
import {MatCardModule} from '@angular/material/card'
import {MatSortModule} from '@angular/material/sort'
import {MatPaginatorModule} from '@angular/material/paginator'
import {ReactiveFormsModule} from '@angular/forms'
import {accountFeatureRoutes} from './account-feature.routes'
import {AccountFeatureContainer} from './account-feature.container'
import {CreateUserDialog, UpdateUserDialog} from './components'
import {UiBaseModule} from '@dev/shared-ui-base'
import {UsersContainer} from './containers'

@NgModule({
  imports: [
    CommonModule,
    UiFormsModule,
    UiBaseModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatTableModule,
    MatCardModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    RouterModule.forChild(accountFeatureRoutes),
  ],
  declarations: [
    AccountFeatureContainer,
    UsersContainer,
    CreateUserDialog,
    UpdateUserDialog,
  ],
})
export class AccountFeatureModule {}
