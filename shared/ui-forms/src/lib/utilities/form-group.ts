import {FormGroup, ValidatorFn} from '@angular/forms'
import {formControl} from './form-control'
import {TypedFormModel} from '../types'

export function formGroup<T, K extends keyof T = keyof T>(...controls: [K, T[K], ...ValidatorFn[]][]) {
  return new FormGroup(
    controls.reduce((prev, [key, value, validators]) => {
      return {...prev, ...{[key]: formControl<T[K]>(value, validators)}}
    }, {} as TypedFormModel<T>)
  )
}
