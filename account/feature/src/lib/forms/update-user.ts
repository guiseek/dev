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
      name: new FormControl(),
      lastName: new FormControl(),
    })
    this.patchValue(value)
  }
}
