import {
  SignIn,
  AuthUser,
  AccessToken,
  AuthService,
  CreateUser,
} from '@dev/account-domain'
import {Http} from '@dev/shared-data-access'
import {take, tap} from 'rxjs'

export class AuthServiceImpl implements AuthService {
  get accessToken() {
    return localStorage.getItem('accessToken')
  }
  set accessToken(value) {
    if (value) localStorage.setItem('accessToken', value)
    else localStorage.removeItem('accessToken')
  }

  constructor(private readonly http: Http, readonly url: string) {}

  login(value: SignIn) {
    return this.http.post<AccessToken>(`${this.url}/login`, value).pipe(
      tap(({accessToken}) => (this.accessToken = accessToken)),
      take(1)
    )
  }

  register(value: CreateUser) {
    return this.http.post<AuthUser>(`${this.url}/register`, value).pipe(take(1))
  }

  me() {
    return this.http.get<AuthUser>(`${this.url}/me`).pipe(take(1))
  }
}
