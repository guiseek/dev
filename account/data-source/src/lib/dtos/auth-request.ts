import {AuthUserDto} from './auth-user'
import {Request} from 'express'

export interface AuthRequestDto extends Request {
  user: AuthUserDto
}
