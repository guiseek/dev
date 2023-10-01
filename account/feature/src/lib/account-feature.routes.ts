import {Route} from '@angular/router'
import {AccountFeatureContainer} from './account-feature.container'
import {GroupsContainer, UsersContainer} from './containers'

export const accountFeatureRoutes: Route[] = [
  {
    path: '',
    component: AccountFeatureContainer,
    children: [
      {
        path: '',
        component: UsersContainer,
      },
      {
        path: 'groups',
        component: GroupsContainer,
      },
    ],
  },
]
