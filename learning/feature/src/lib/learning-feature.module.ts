import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {MatButtonModule} from '@angular/material/button'
import {MatTableModule} from '@angular/material/table'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu'
import {MatDialogModule} from '@angular/material/dialog'
import {MatCardModule} from '@angular/material/card'
import {MatSortModule} from '@angular/material/sort'
import {MatPaginatorModule} from '@angular/material/paginator'
import {provideRailFacade, provideRailService} from '@dev/learning-data-access'
import {UiBaseModule} from '@dev/shared-ui-base'
import {UiFormsModule} from '@dev/shared-ui-forms'
import {learningFeatureRoutes} from './learning-feature.routes'
import {LearningFeatureContainer} from './learning-feature.container'
import {CreateRailDialog, UpdateRailDialog} from './components'
import {RailsContainer} from './containers'

@NgModule({
  imports: [
    CommonModule,
    UiBaseModule,
    UiFormsModule,
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
    RouterModule.forChild(learningFeatureRoutes),
  ],
  declarations: [
    LearningFeatureContainer,
    RailsContainer,
    CreateRailDialog,
    UpdateRailDialog,
  ],
  providers: [provideRailService(), provideRailFacade()],
})
export class LearningFeatureModule {}
