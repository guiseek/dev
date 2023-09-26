import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu'
import {MatIconModule} from '@angular/material/icon'
import {SelectionMenuComponent} from './components'
import {MenuItemsLinkActiveDirective} from './directives'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  declarations: [SelectionMenuComponent, MenuItemsLinkActiveDirective],
  exports: [SelectionMenuComponent, MenuItemsLinkActiveDirective],
})
export class UiBaseModule {}
