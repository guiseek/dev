import {CreateRail} from './create-rail'

export interface UpdateRail extends Partial<CreateRail> {
  id: string
}
