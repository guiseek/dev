import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http'
import {HttpClientTestingModule} from '@angular/common/http/testing'
import {TestBed} from '@angular/core/testing'
import {LOCALE_ID} from '@angular/core'
import {RouterTestingModule} from '@angular/router/testing'
import {LayoutModule} from '@angular/cdk/layout'
import {provideHttp, provideLoader} from '@dev/shared-data-access'
import {provideAccount} from '@dev/account-data-access'
import {AppInterceptor} from './app.interceptor'
import {AppComponent} from './app.component'
import {SharedMaterial} from './shared'

import {env} from '../envs/env.development'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        SharedMaterial.forApp(),
        LayoutModule,
      ],
      declarations: [AppComponent],
      providers: [
        provideHttp(HttpClient),
        provideLoader(),
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
