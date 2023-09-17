import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {provideHttp, provideLoader} from '@dev/shared-data-access'
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
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
import {MatIconModule, MatIconRegistry} from '@angular/material/icon'
import {LayoutModule} from '@angular/cdk/layout'
import {UiBaseModule} from '@dev/shared-ui-base'
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http'
import {
  provideContentFacade,
  provideContentService,
} from '@dev/content-data-access'
import {LoaderComponent} from './loader/loader.component'
import {AppInterceptor} from './app.interceptor'
import {AppComponent} from './app.component'
import {appRoutes} from './app.routes'

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
    UiBaseModule.forRoot(),
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    BrowserAnimationsModule,
  ],
  providers: [
    provideHttp(HttpClient),
    provideContentService(),
    provideContentFacade(),
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
export class AppModule {
  constructor(registry: MatIconRegistry, sanitizer: DomSanitizer) {
    const SMB_SHARE = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path d="M485-440h163q26 0 44-18t18-44q0-26-18-44.5T648-565h-2q-5-32-29-53.5T560-640q-26 0-47 13.5T481-590q-30 2-50.5 23.5T410-515q0 30 21.5 52.5T485-440ZM120-120q-33 0-56.5-23.5T40-200v-520h80v520h680v80H120Zm160-160q-33 0-56.5-23.5T200-360v-440q0-33 23.5-56.5T280-880h200l80 80h280q33 0 56.5 23.5T920-720v360q0 33-23.5 56.5T840-280H280Zm0-80h560v-360H527l-80-80H280v440Zm0 0v-440 440Z"/>
    </svg>`
    registry.addSvgIconLiteral(
      'smb-share',
      sanitizer.bypassSecurityTrustHtml(SMB_SHARE)
    )
  }
}
