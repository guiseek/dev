import {Component, ChangeDetectionStrategy} from '@angular/core'

@Component({
  selector: 'dev-content-feature',
  template: `<router-outlet />`,
  styleUrls: ['./content-feature.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentFeatureContainer {}
