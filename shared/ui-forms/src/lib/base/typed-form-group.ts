import {FormGroup} from '@angular/forms'
import {TypedFormModel} from '../types'

export class TypedFormGroup<T extends object> extends FormGroup<
  TypedFormModel<T>
> {}
