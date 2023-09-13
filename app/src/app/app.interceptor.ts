import {Injectable} from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http'
import {Observable, finalize} from 'rxjs'
import {Loader} from '@dev/shared-data-access'

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private readonly loader: Loader) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log(request)
    this.loader.activate()
    return next.handle(request).pipe(finalize(() => this.loader.deActivate()))
  }
}
