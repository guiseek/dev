import {Component, inject, ChangeDetectionStrategy} from '@angular/core'
import {BreakpointObserver} from '@angular/cdk/layout'
import {BehaviorSubject} from 'rxjs'

@Component({
  selector: 'dev-dashboard-feature',
  templateUrl: './dashboard-feature.component.html',
  styleUrls: ['./dashboard-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardFeatureComponent {
  private breakpointObserver = inject(BreakpointObserver)

  #cards = new BehaviorSubject([
    {
      title: 'Card 1',
      value: (Math.random() * 999).toFixed(),
      cols: 1,
      rows: 1,
    },
    {
      title: 'Card 2',
      value: (Math.random() * 99).toFixed(),
      cols: 1,
      rows: 1,
    },
    {
      title: 'Card 3',
      value: (Math.random() * 999).toFixed(),
      cols: 1,
      rows: 1,
    },
    {
      title: 'Card 4',
      value: (Math.random() * 999).toFixed(),
      cols: 1,
      rows: 1,
    },
    {
      title: 'Card 5',
      value: (Math.random() * 9999).toFixed(),
      cols: 1,
      rows: 1,
    },
    {
      title: 'Card 6',
      value: (Math.random() * 999).toFixed(),
      cols: 1,
      rows: 1,
    },
  ])
  cards$ = this.#cards.asObservable()

  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({matches}) => {
  //     if (matches) {
  //       return [
  //         {title: 'Card 1', cols: 1, rows: 1},
  //         {title: 'Card 2', cols: 1, rows: 1},
  //         {title: 'Card 3', cols: 1, rows: 1},
  //         {title: 'Card 4', cols: 1, rows: 1},
  //       ]
  //     }

  //     return [
  //       {title: 'Card 1', cols: 2, rows: 1},
  //       {title: 'Card 2', cols: 1, rows: 1},
  //       {title: 'Card 3', cols: 1, rows: 2},
  //       {title: 'Card 4', cols: 1, rows: 1},
  //     ]
  //   })
  // )
}
