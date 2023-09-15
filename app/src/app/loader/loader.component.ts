import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
  selector: 'dev-loader',
  template: ` <div class="sky"></div> `,
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {}
