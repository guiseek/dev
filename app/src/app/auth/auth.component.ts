import {BehaviorSubject, Subject, filter, takeUntil} from 'rxjs'
import {AuthFacade, CreateUser} from '@dev/account-data-access'
import {SignInComponent, SignUpComponent} from '@dev/account-ui-auth'
import {Router} from '@angular/router'
import {
  OnInit,
  inject,
  ViewChild,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core'

@Component({
  selector: 'dev-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  router = inject(Router)

  @ViewChild(SignInComponent)
  signInComponent: SignInComponent

  @ViewChild(SignUpComponent)
  signUpComponent: SignUpComponent

  #tabIndex = new BehaviorSubject(0)
  tabIndex$ = this.#tabIndex.asObservable()

  authFacade = inject(AuthFacade)

  #destroy = new Subject<void>()

  ngOnInit() {
    this.authFacade.authUser$
      .pipe(
        takeUntil(this.#destroy),
        filter((authUser) => !!authUser)
      )
      .subscribe((authUser) => {
        if (authUser) {
          this.router.navigate(['/account'])
          this.#destroy.complete()
          this.#destroy.next()
        }
      })
  }

  onSelectedIndexChange(index: number) {
    this.#tabIndex.next(index)
  }

  onTabChanged() {
    if (this.#tabIndex.value) {
      this.signUpComponent.focus()
    } else {
      this.signInComponent.focus()
    }
  }

  onSignUp<T extends CreateUser>(createUser: T) {
    this.authFacade.register(createUser)
    this.onSelectedIndexChange(0)
  }
}
