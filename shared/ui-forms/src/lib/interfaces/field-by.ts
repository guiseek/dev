import {FieldOption} from './field-option'

export type FieldType = string | number | boolean | Date

export interface FilterByFieldOption extends FieldOption {
  type: 'text' | 'number' | 'bool' | 'date'
}

export interface FilterBy<T extends FieldType> {
  field: FilterByFieldOption | string
  value: T | null
}
