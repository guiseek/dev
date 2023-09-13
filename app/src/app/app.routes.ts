import {Route} from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: 'account',
    loadChildren: () =>
      import('@dev/account-feature').then((m) => m.AccountFeatureModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('@dev/content-feature').then((m) => m.ContentFeatureModule),
  },
]
