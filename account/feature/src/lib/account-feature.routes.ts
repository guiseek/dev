import {Route} from '@angular/router'
import {AccountFeatureContainer} from './account-feature.container'
import {UsersContainer} from './containers'

export const accountFeatureRoutes: Route[] = [
  {
    path: '',
    component: AccountFeatureContainer,
    children: [
      {
        path: '',
        component: UsersContainer,
      },
    ],
  },
]
