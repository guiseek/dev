import {HttpRequest, HttpHandler, HttpInterceptor} from '@angular/common/http'
import {Loader} from '@dev/shared-data-access'
import {Injectable} from '@angular/core'
import {finalize} from 'rxjs'

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private readonly loader: Loader) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    this.loader.activate()
    return next.handle(request).pipe(
      // delay(300),
      finalize(() => this.loader.deActivate())
    )
  }
}
