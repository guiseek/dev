import { DeleteButtonComponent } from './delete-button/delete-button.component'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatButtonModule } from '@angular/material/button'
import { ShellComponent } from './shell/shell.component'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { LayoutModule } from '@angular/cdk/layout'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

const components = [ShellComponent, ToolbarComponent, DeleteButtonComponent]

const modules = [
  CommonModule,
  RouterModule,
  MatIconModule,
  LayoutModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatSlideToggleModule,
]

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class SharedModule {}
