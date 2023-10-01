import {AuthUser} from './auth-user'

export interface AuthRequest extends Request {
  user: AuthUser
}
