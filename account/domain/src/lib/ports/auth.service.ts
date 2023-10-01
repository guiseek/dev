import {AccessToken, AuthUser, CreateUser, SignIn} from '../dtos'
import {Observable} from 'rxjs'

export abstract class AuthService {
  abstract get accessToken(): string | null
  abstract set accessToken(value: string | null)

  abstract login(value: SignIn): Observable<AccessToken>
  abstract register(value: CreateUser): Observable<AuthUser>
  abstract me(): Observable<AuthUser>
}
