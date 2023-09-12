import type {AbstractControlOptions} from '@angular/forms'

type TypedFormValidator<T> = {
  [K in keyof T]: AbstractControlOptions
}

export type {TypedFormValidator}
