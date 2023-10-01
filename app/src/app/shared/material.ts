import {MatMenuModule} from '@angular/material/menu'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatDividerModule} from '@angular/material/divider'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card'
import {MatTabsModule} from '@angular/material/tabs'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {LayoutModule} from '@angular/cdk/layout'

export class SharedMaterial {
  static forApp() {
    return [
      LayoutModule,
      MatDividerModule,
      MatSidenavModule,
      MatMenuModule,
      MatCardModule,
      MatTabsModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
    ]
  }
}
