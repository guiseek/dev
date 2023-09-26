import {Route} from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@dev/dashboard-feature').then((m) => m.DashboardFeatureModule),
  },
]
