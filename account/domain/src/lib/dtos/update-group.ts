import {CreateGroup} from './create-group'

export interface UpdateGroup extends Partial<CreateGroup> {
  id: string
}
