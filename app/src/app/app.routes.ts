import {AuthComponent} from './auth/auth.component'
import {authGuard} from './auth/auth.guard'
import {Route} from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: 'account',
    canActivate: [authGuard],
    loadChildren: () =>
      import('@dev/account-feature').then((m) => m.AccountFeatureModule),
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'account',
  },
]
