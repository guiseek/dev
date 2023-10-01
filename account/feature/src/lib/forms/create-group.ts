import {FormControl, Validators} from '@angular/forms'
import {CreateGroup} from '@dev/account-data-access'
import {TypedFormGroup} from '@dev/shared-ui-forms'

export class CreateGroupForm extends TypedFormGroup<CreateGroup> {
  constructor() {
    super({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),

      label: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),

      permission: new FormControl(0, {
        nonNullable: true,
        validators: [Validators.required],
      }),
    })
  }
}
