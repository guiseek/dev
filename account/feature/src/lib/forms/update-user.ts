import {FormControl, Validators} from '@angular/forms'
import {User, UpdateUser} from '@dev/account-data-access'
import {TypedFormGroup} from '@dev/shared-ui-forms'

export class UpdateUserForm extends TypedFormGroup<UpdateUser> {
  constructor(value: User) {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      username: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      birthdate: new FormControl(null, {
        nonNullable: true,
        validators: [Validators.required],
      }),
    })
    this.patchValue(value)
  }
}
