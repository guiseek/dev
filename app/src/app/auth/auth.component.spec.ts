import {provideAuth, provideGroup, provideUser} from '@dev/account-data-access'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HttpClientTestingModule} from '@angular/common/http/testing'
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http'
import {TestBed} from '@angular/core/testing'
import {LOCALE_ID} from '@angular/core'
import {provideHttp, provideLoader} from '@dev/shared-data-access'
import {AccountUiAuthModule} from '@dev/account-ui-auth'
import {RouterTestingModule} from '@angular/router/testing'
import {LayoutModule} from '@angular/cdk/layout'
import {SharedMaterial} from '../shared'
import {AuthComponent} from './auth.component'
import {AppInterceptor} from '../app.interceptor'
import {AuthInterceptor} from './auth.interceptor'

import {env} from '../../envs/env'

describe('AuthComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        AccountUiAuthModule,
        SharedMaterial.forApp(),
        LayoutModule,
      ],
      declarations: [AuthComponent],
      providers: [
        provideHttp(HttpClient),
        provideLoader(),
        provideUser(env.level, env.api.account),
        provideGroup(env.level, env.api.accountGroups),
        provideAuth(env.level, env.api.accountAuth),
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
    }).compileComponents()
  })

  it('should render title', async () => {
    const fixture = TestBed.createComponent(AuthComponent)
    await fixture.whenStable()
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('form')?.elements.length).toBe(4)
  })
})
