import {Component, ChangeDetectionStrategy} from '@angular/core'

@Component({
  selector: 'dev-learning-feature',
  template: `<router-outlet />`,
  styleUrls: ['./learning-feature.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearningFeatureContainer {}
