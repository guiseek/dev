import {FormArray, FormControl, FormGroup} from '@angular/forms'
import {TypedFormModel, TypedFormValidator} from '../types'

export function formBuilder<T extends object>(value: T, options: Partial<TypedFormValidator<T>> = {}) {
  const group = new FormGroup({})

  for (const [key, val] of Object.entries(value)) {
    const k = key as keyof T
    const validators = options[k] ? options[k] : []

    if (Array.isArray(val)) {
      const controls = val.map((v) => new FormControl(v, validators))
      group.addControl(key, new FormArray(controls))
    } else {
      const control = new FormControl(val, validators)
      group.addControl(key, control)
    }
  }

  return group as unknown as FormGroup<TypedFormModel<T>>
}
