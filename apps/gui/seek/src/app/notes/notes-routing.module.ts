import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { NotesComponent } from './notes.component'

const routes: Routes = [
  {
    path: ':note',
    component: NotesComponent,
  },
  {
    path: '**',
    component: NotesComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
