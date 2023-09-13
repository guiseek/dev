import {FormControl, FormGroup} from '@angular/forms'
import {TypedFormModel} from './typed-form-model'

type TypedForm<T> = T extends object
  ? FormGroup<TypedFormModel<T>>
  : FormControl<T>

export type {TypedForm}
