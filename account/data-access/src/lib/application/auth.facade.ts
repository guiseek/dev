import {AuthService, AuthUser, CreateUser, SignIn} from '@dev/account-domain'
import {Store} from '@dev/shared-data-access'
import {switchMap, take, tap} from 'rxjs'

interface AuthState {
  authUser: AuthUser | null
  warning: string | null
  loading: boolean
}
export class AuthFacade extends Store<AuthState> {
  authUser$ = this.select((state) => state.authUser)
  warning$ = this.select((state) => state.warning)
  loading$ = this.select((state) => state.loading)

  get accessToken() {
    return this.authService.accessToken
  }

  constructor(private authService: AuthService) {
    super({authUser: null, warning: null, loading: false})
  }

  login<T extends SignIn>(signIn: T) {
    this.setState({loading: true})
    const authUser$ = this.authService.login(signIn).pipe(
      switchMap(() => this.authService.me()),
      take(1)
    )

    authUser$.subscribe((authUser) => this.setState({authUser, loading: false}))
  }

  me() {
    return this.authService.me().pipe(
      tap((authUser) => this.setState({authUser})),
      take(1)
    )
  }

  register(createUser: CreateUser) {
    this.setState({loading: true})
    const createUser$ = this.authService.register(createUser).pipe(take(1))

    createUser$.subscribe((authUser) =>
      this.setState({authUser, loading: false})
    )
  }

  logout() {
    this.authService.accessToken = null
    this.setState({authUser: null})
  }
}
