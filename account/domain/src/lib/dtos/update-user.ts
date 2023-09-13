import {CreateUser} from './create-user'

export interface UpdateUser extends Partial<CreateUser> {
  id: string
}
