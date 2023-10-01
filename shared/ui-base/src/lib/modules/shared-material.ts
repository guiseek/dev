import {MatButtonModule} from '@angular/material/button'
import {MatTableModule} from '@angular/material/table'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu'
import {MatListModule} from '@angular/material/list'
import {MatDialogModule} from '@angular/material/dialog'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatCardModule} from '@angular/material/card'
import {MatSortModule} from '@angular/material/sort'
import {MatPaginatorModule} from '@angular/material/paginator'
import {NgModule} from '@angular/core'

@NgModule({
  exports: [
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatSortModule,
    MatPaginatorModule,
  ],
})
export class SharedMaterial {}
