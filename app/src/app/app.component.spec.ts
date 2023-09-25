import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http'
import {TestBed} from '@angular/core/testing'
import {LOCALE_ID} from '@angular/core'
import {RouterTestingModule} from '@angular/router/testing'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatMenuModule} from '@angular/material/menu'
import {MatDividerModule} from '@angular/material/divider'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {LayoutModule} from '@angular/cdk/layout'
import {provideHttp, provideLoader} from '@dev/shared-data-access'
import {provideUser} from '@dev/account-data-access'
import {provideRail} from '@dev/learning-data-access'
import {provideContent} from '@dev/content-data-access'
import {AppInterceptor} from './app.interceptor'
import {AppComponent} from './app.component'
import {env} from '../envs/env'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatDividerModule,
        MatSidenavModule,
        MatMenuModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
      ],
      declarations: [AppComponent],
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
    }).compileComponents()
  })

  it('should render title', async () => {
    const fixture = TestBed.createComponent(AppComponent)
    await fixture.whenStable()
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('h1')?.textContent).toContain('Quero Ser Dev')
  })
})
