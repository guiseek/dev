import {FormControl, Validators} from '@angular/forms'
import {CreateContent} from '@dev/content-data-access'
import {TypedFormGroup} from '@dev/shared-ui-forms'

export class CreateContentForm extends TypedFormGroup<CreateContent> {
  constructor() {
    super({
      title: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      path: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    })
  }
}
