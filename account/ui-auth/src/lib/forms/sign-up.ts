import {FormControl, Validators} from '@angular/forms'
import {TypedFormGroup} from '@dev/shared-ui-forms'

export interface SignUp {
  name: string
  email: string
  birthdate: Date
  username: string
  password: string
}

export class SignUpForm extends TypedFormGroup<SignUp> {
  constructor() {
    super({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      birthdate: new FormControl(null, {
        nonNullable: true,
        validators: [Validators.required],
      }),
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
