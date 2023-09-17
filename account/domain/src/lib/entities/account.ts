import {User} from './user'

export interface Account {
  id: string
  email: string
  phone?: number
  user: User
}
