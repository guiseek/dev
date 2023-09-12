import {FormArray} from '@angular/forms'
import {TypedForm} from '../types'

export abstract class TypedFormArray<T> extends FormArray<TypedForm<T>> {}
