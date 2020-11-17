import { UserService } from './../../user/user.service'
import { map, shareReplay } from 'rxjs/operators'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { BehaviorSubject, Observable } from 'rxjs'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'meet-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() title: string

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    )

  user$ = this.service.user$

  isDark = new BehaviorSubject<boolean>(false)
  isDark$ = this.isDark.asObservable()

  toggle() {
    this.isDark.next(!this.isDark.value)
  }

  logout() {
    this.service.signOut()
  }
  constructor(
    private breakpointObserver: BreakpointObserver,
    private service: UserService
  ) {}
}
