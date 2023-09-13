import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {Loader} from '@dev/shared-data-access'

@Component({
  selector: 'dev-root',
  template: `
    <router-outlet />
    <dev-loader *ngIf="loader.active$ | async" />
  `,
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  loader = inject(Loader)
}
