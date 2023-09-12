import {Route} from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@dev/content-feature').then((m) => m.ContentFeatureModule),
  },
]
