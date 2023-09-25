import {FormControl, Validators} from '@angular/forms'
import {CreateBook} from '@dev/content-data-access'
import {TypedFormGroup} from '@dev/shared-ui-forms'

export class CreateBookForm extends TypedFormGroup<CreateBook> {
  constructor() {
    super({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    })
  }
}
