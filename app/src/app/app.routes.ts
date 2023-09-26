import {Route} from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: 'learning',
    loadChildren: () =>
      import('@dev/learning-feature').then((m) => m.LearningFeatureModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('@dev/dashboard-feature').then((m) => m.DashboardFeatureModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('@dev/account-feature').then((m) => m.AccountFeatureModule),
  },
  {
    path: 'content',
    loadChildren: () =>
      import('@dev/content-feature').then((m) => m.ContentFeatureModule),
  },
]