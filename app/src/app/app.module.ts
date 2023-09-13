import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http'
import {BrowserModule} from '@angular/platform-browser'
import {registerLocaleData} from '@angular/common'
import {LOCALE_ID, NgModule} from '@angular/core'
import BR from '@angular/common/locales/extra/br'
import pt from '@angular/common/locales/pt'
import {RouterModule} from '@angular/router'
import {provideHttp, provideLoader} from '@dev/shared-data-access'
import {AppInterceptor} from './app.interceptor'
import {AppComponent} from './app.component'
import {appRoutes} from './app.routes'
import {LoaderComponent} from './loader/loader.component'

registerLocaleData(pt, 'pt-BR', BR)

@NgModule({
  declarations: [AppComponent, LoaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    BrowserAnimationsModule,
  ],
  providers: [
    provideHttp(HttpClient),
    provideLoader(),
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
