import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {provideHttp, provideLoader} from '@dev/shared-data-access'
import {BrowserModule} from '@angular/platform-browser'
import {registerLocaleData} from '@angular/common'
import {LOCALE_ID, NgModule} from '@angular/core'
import BR from '@angular/common/locales/extra/br'
import pt from '@angular/common/locales/pt'
import {RouterModule} from '@angular/router'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatMenuModule} from '@angular/material/menu'
import {MatDividerModule} from '@angular/material/divider'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {LayoutModule} from '@angular/cdk/layout'
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http'
import {provideUser} from '@dev/account-data-access'
import {provideRail} from '@dev/learning-data-access'
import {provideContent} from '@dev/content-data-access'
import {LoaderComponent} from './loader/loader.component'
import {AppInterceptor} from './app.interceptor'
import {AppComponent} from './app.component'
import {appRoutes} from './app.routes'
import {env} from '../envs/env'

registerLocaleData(pt, 'pt-BR', BR)

@NgModule({
  declarations: [AppComponent, LoaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    MatDividerModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      initialNavigation: 'enabledBlocking',
    }),
  ],
  providers: [
    provideHttp(HttpClient),
    provideUser(env.production, env.api.account),
    provideRail(env.production, env.api.learning),
    provideContent(env.production, env.api.content),
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
