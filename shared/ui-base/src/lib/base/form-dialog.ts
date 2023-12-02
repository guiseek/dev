import {TypedFormGroup} from '@dev/shared-ui-forms'
import {of} from 'rxjs'

export abstract class FormDialog<T> {
  abstract form: TypedFormGroup<T>

  message$ = of<string | null>(null)
}
