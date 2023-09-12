import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {UiFormsModule} from '@dev/shared-ui-forms'
import {MatButtonModule} from '@angular/material/button'
import {MatTableModule} from '@angular/material/table'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import {MatSortModule} from '@angular/material/sort'
import {MatPaginatorModule} from '@angular/material/paginator'
import {ReactiveFormsModule} from '@angular/forms'
import {contentFeatureRoutes} from './content-feature.routes'
import {ContentFeatureContainer} from './content-feature.container'
import {
  provideContentFacade,
  provideContentService,
} from '@dev/content-data-access'

@NgModule({
  imports: [
    CommonModule,
    UiFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    RouterModule.forChild(contentFeatureRoutes),
  ],
  declarations: [ContentFeatureContainer],
  providers: [provideContentService(), provideContentFacade()],
})
export class ContentFeatureModule {}
