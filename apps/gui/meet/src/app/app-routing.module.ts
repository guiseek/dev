import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { AuthGuard } from './user/auth.guard'

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'login',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'kanban',
    loadChildren: () =>
      import('./kanban/kanban.module').then((m) => m.KanbanModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'meeting',
    loadChildren: () =>
      import('./meeting/meeting.module').then((m) => m.MeetingModule),
  },
  {
    path: 'board',
    loadChildren: () =>
      import('./board/board.module').then(m => m.BoardModule),
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
