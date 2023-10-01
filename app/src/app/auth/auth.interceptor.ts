import {HttpRequest, HttpHandler, HttpInterceptor} from '@angular/common/http'
import {AuthFacade} from '@dev/account-data-access'
import {Injectable} from '@angular/core'
import {Router} from '@angular/router'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private readonly router: Router,
    private authFacade: AuthFacade
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    if (!this.authFacade.accessToken) {
      this.router.navigate(['/', 'auth'])
      this.authFacade.logout()
    }

    const bearerToken = `Bearer ${this.authFacade.accessToken}`
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', bearerToken),
    })

    return next.handle(authRequest)
  }
}
