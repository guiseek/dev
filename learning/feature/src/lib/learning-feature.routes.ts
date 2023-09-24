import {Route} from '@angular/router'
import {LearningFeatureContainer} from './learning-feature.container'
import {RailsContainer} from './containers'

export const learningFeatureRoutes: Route[] = [
  {
    path: '',
    component: LearningFeatureContainer,
    children: [
      {
        path: '',
        component: RailsContainer,
      },
    ],
  },
]
