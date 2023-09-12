import {FormControl, ValidatorFn} from '@angular/forms'

export function formControl<T>(value: T, ...validators: ValidatorFn[]) {
  return new FormControl<T>(value, {
    nonNullable: true,
    validators,
  })
}
