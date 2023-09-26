import {Route} from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@dev/tools-feature').then((m) => m.ToolsFeatureModule),
  },
]
