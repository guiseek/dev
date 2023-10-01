import {Group} from './group'

export interface User {
  id: string
  name: string
  email: string
  birthdate: Date
  groups: Group[]
  username: string
  password: string
  createdAt: Date
  updatedAt: Date
}
