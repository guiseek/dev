import {CreateDomain} from './create-domain'

export interface UpdateDomain extends Partial<CreateDomain> {
  id: string
}
