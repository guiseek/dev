import {FormControl, Validators} from '@angular/forms'
import {TypedFormGroup} from '@dev/shared-ui-forms'

export interface SignIn {
  username: string
  password: string
}

export class SignInForm extends TypedFormGroup<SignIn> {
  constructor() {
    super({
      username: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)],
      }),
    })
  }
}
