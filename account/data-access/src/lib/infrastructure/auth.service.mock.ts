import {AuthService, CreateUser, SignIn} from '@dev/account-domain'
import {of} from 'rxjs'

const MOCK_USER = {
  name: 'mock',
  username: 'username',
  email: 'mock@user.dev',
  id: 'mo-ck-id',
}
const MOCK_AUTH = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YjU2YTlkNy0wMWMwLTQ4NjEtYmY0MC1jMzMwNjMzY2E3MWQiLCJuYW1lIjoiR3VpbGhlcm1lIiwidXNlcm5hbWUiOiJndWlzZWVrIiwiZW1haWwiOiJlbWFpbEBndWlzZWVrLmRldiIsImlhdCI6MTY5NjEzMzMzMywiZXhwIjoxNjk2MjE5NzMzfQ.SyeK25DlNIJNl3eu8Jabjd0XaQWm-j_WSB8f5MoYEGE`

export class AuthServiceMock implements AuthService {
  get accessToken() {
    return localStorage.getItem('accessToken')
  }
  set accessToken(value) {
    if (value) localStorage.setItem('accessToken', value)
    else localStorage.removeItem('accessToken')
  }

  login(value: SignIn) {
    console.log(`login: `, value)
    return of({accessToken: MOCK_AUTH})
  }
  register(value: CreateUser) {
    console.log(`register: `, value)
    return of(MOCK_USER)
  }

  me() {
    return of(MOCK_USER)
  }
}
