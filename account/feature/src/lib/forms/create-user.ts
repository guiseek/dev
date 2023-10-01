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
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      username: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)],
      }),
      birthdate: new FormControl(null, {
        nonNullable: true,
        validators: [Validators.required],
      }),
    })
  }
}
