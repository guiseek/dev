import {TypedFormGroup} from '@dev/shared-ui-forms'
import {of} from 'rxjs'

export abstract class FormDialog<T extends object> {
  abstract form: TypedFormGroup<T>

  message$ = of<string | null>(null)
}
