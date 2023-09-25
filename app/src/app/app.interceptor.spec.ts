import {TestBed} from '@angular/core/testing'

import {AppInterceptor} from './app.interceptor'
import {HttpClientTestingModule} from '@angular/common/http/testing'
import {provideLoader} from '@dev/shared-data-access'

describe('AppInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideLoader(), AppInterceptor],
    })
  )

  it('should be created', () => {
    const interceptor: AppInterceptor = TestBed.inject(AppInterceptor)
    expect(interceptor).toBeTruthy()
  })
})
