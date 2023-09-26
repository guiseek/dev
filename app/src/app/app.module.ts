import {provideHttp, provideLoader} from '@dev/shared-data-access'
import {UiBaseModule} from '@dev/shared-ui-base'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {BrowserModule} from '@angular/platform-browser'
import {registerLocaleData} from '@angular/common'
import {LOCALE_ID, NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import BR from '@angular/common/locales/extra/br'
import pt from '@angular/common/locales/pt'
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http'
import {AppInterceptor} from './app.interceptor'
import {AppComponent} from './app.component'
import {LoaderComponent} from './loader'
import {SharedMaterial} from './shared'
import {appRoutes} from './app.routes'

registerLocaleData(pt, 'pt-BR', BR)

@NgModule({
  declarations: [AppComponent, LoaderComponent],
  imports: [
    UiBaseModule,
    BrowserModule,
    HttpClientModule,
    SharedMaterial.forApp(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      initialNavigation: 'enabledBlocking',
    }),
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
