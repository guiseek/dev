import {FormGroup} from '@angular/forms'
import {TypedFormModel} from '../types'
import {Subject} from 'rxjs'

export class TypedFormGroup<T extends object> extends FormGroup<TypedFormModel<T>> {
  #submitted = new Subject<T>()
  submitted$ = this.#submitted.asObservable()

  submit() {
    if (this.valid) {
      this.#submitted.next(this.value as T)
    } else {
      this.markAllAsTouched()
    }
  }
}
