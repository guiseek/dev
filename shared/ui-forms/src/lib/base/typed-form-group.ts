import {FormGroup} from '@angular/forms'
import {TypedFormModel} from '../types'
import {Subject} from 'rxjs'

export class TypedFormGroup<T extends object> extends FormGroup<
  TypedFormModel<T>
> {
  #submitted = new Subject<T>()
  submitted$ = this.#submitted.asObservable()

  getValue() {
    return this.value as Required<T>
  }

  submit() {
    if (this.valid) {
      this.#submitted.next(this.value as T)
    } else {
      this.markAllAsTouched()
    }
  }
}
