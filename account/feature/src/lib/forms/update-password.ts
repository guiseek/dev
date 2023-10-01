import {User, UpdatePassword} from '@dev/account-data-access'
import {FormControl, Validators} from '@angular/forms'
import {TypedFormGroup} from '@dev/shared-ui-forms'

export class UpdatePasswordForm extends TypedFormGroup<UpdatePassword> {
  constructor(value: User) {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      oldPassword: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)],
      }),
    })
    this.patchValue(value)
  }
}
