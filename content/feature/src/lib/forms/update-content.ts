import {FormControl, Validators} from '@angular/forms'
import {Content, UpdateContent} from '@dev/content-data-access'
import {TypedFormGroup} from '@dev/shared-ui-forms'

export class UpdateContentForm extends TypedFormGroup<UpdateContent> {
  constructor(value: Content) {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      title: new FormControl(),
      path: new FormControl(),
    })
    this.patchValue(value)
  }
}
