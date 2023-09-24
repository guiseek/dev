import {Route} from '@angular/router'
import {ContentFeatureContainer} from './content-feature.container'
import {ContentsContainer} from './containers'

export const contentFeatureRoutes: Route[] = [
  {
    path: '',
    component: ContentFeatureContainer,
    children: [
      {
        path: '',
        component: ContentsContainer,
      },
    ],
  },
]
