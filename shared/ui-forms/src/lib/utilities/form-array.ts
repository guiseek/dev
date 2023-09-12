import {FormArray, ValidatorFn} from '@angular/forms'
import {formControl} from './form-control'
import {formGroup} from './form-group'

export function formArray<T, K extends keyof T = keyof T>(...controls: [K, T[K], ...ValidatorFn[]][]) {
  return new FormArray(
    controls.map((value) => {
      const isGroup = typeof value === 'object'
      return isGroup ? formGroup<T>(value) : formControl<T>(value)
    })
  )
}
