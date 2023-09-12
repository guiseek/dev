import {CreateContent} from './create-content'

export interface UpdateContent extends Partial<CreateContent> {
  id: string
}
