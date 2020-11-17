import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'
import { BoardComponent } from './board.component'
import { TaskComponent } from './task/task.component'
import { TaskDialogComponent } from './task-dialog/task-dialog.component'

const routes: Routes = [
  { path: '', component: BoardComponent },
  // { path: '', component: }
]

@NgModule({
  declarations: [BoardComponent, TaskComponent, TaskDialogComponent],
  imports: [
    CommonModule,
    DragDropModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class BoardModule {}
