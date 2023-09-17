import {User} from '../entities'

export interface CreateUser
  extends Omit<User, 'id' | 'createdAt' | 'updatedAt'> {
  name: string
  lastName: string
}
