import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {registerLocaleData} from '@angular/common'
import BR from '@angular/common/locales/extra/br'
import pt from '@angular/common/locales/pt'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {LOCALE_ID, NgModule} from '@angular/core'
import {provideHttp} from '@dev/shared-data-access'
import {AppComponent} from './app.component'
import {appRoutes} from './app.routes'

registerLocaleData(pt, 'pt-BR', BR)

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    BrowserAnimationsModule,
  ],
  providers: [
    provideHttp(HttpClient),
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
