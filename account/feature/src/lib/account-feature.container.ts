import {Component, ChangeDetectionStrategy} from '@angular/core'

@Component({
  selector: 'dev-account-feature',
  template: `<router-outlet />`,
  styleUrls: ['./account-feature.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountFeatureContainer {}
