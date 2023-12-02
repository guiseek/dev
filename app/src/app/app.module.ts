import {provideAccount} from '@dev/account-data-access'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {provideEnv, provideHttp, provideLoader} from '@dev/shared-data-access'
import {BrowserModule} from '@angular/platform-browser'
import {AccountUiAuthModule} from '@dev/account-ui-auth'
import {registerLocaleData} from '@angular/common'
import {LOCALE_ID, NgModule} from '@angular/core'
import {UiBaseModule} from '@dev/shared-ui-base'
import {RouterModule} from '@angular/router'
import BR from '@angular/common/locales/extra/br'
import pt from '@angular/common/locales/pt'
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http'
import {AuthInterceptor} from './auth/auth.interceptor'
import {AuthComponent} from './auth/auth.component'
import {AppInterceptor} from './app.interceptor'
import {AppComponent} from './app.component'
import {LoaderComponent} from './loader'
import {SharedMaterial} from './shared'
import {appRoutes} from './app.routes'
import {env} from '../envs/env.development'

registerLocaleData(pt, 'pt-BR', BR)

@NgModule({
  declarations: [AppComponent, LoaderComponent, AuthComponent],
  imports: [
    UiBaseModule,
    BrowserModule,
    HttpClientModule,
    AccountUiAuthModule,
    SharedMaterial.forApp(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      anchorScrolling: 'enabled',
      // enableTracing: !env.production,
      initialNavigation: 'enabledBlocking',
    }),
  ],
  providers: [
    provideHttp(HttpClient),
    provideLoader(),
    provideEnv(env),
    provideAccount(env),
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
