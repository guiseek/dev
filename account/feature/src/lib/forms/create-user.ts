import {FormControl, Validators} from '@angular/forms'
import {CreateUser} from '@dev/account-data-access'
import {TypedFormGroup} from '@dev/shared-ui-forms'

export class CreateUserForm extends TypedFormGroup<CreateUser> {
  constructor() {
    super({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      lastName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    })
  }
}
