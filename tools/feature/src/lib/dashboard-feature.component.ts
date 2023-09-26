import {Component, ChangeDetectionStrategy} from '@angular/core'
import {BehaviorSubject} from 'rxjs'

@Component({
  selector: 'dev-dashboard-feature',
  templateUrl: './dashboard-feature.component.html',
  styleUrls: ['./dashboard-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardFeatureComponent {
  #cards = new BehaviorSubject([
    {
      title: 'Conteúdos',
      value: (Math.random() * 99).toFixed(),
      cols: 1,
      rows: 1,
    },
    {
      title: 'Contas',
      value: (Math.random() * 99).toFixed(),
      cols: 1,
      rows: 1,
    },
    {
      title: 'Trilhas',
      value: (Math.random() * 99).toFixed(),
      cols: 1,
      rows: 1,
    },
  ])
  cards$ = this.#cards.asObservable()
}
