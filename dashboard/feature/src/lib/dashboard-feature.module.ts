import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {dashboardFeatureRoutes} from './dashboard-feature.routes'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatCardModule} from '@angular/material/card'
import {MatMenuModule} from '@angular/material/menu'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {DashboardFeatureComponent} from './dashboard-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardFeatureRoutes),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [DashboardFeatureComponent],
})
export class DashboardFeatureModule {}
