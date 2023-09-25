import {CreateBook} from './create-book'

export interface UpdateBook extends Partial<CreateBook> {
  id: string
}
