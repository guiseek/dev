import {FormControl, Validators} from '@angular/forms'
import {Group, UpdateGroup} from '@dev/account-data-access'
import {TypedFormGroup} from '@dev/shared-ui-forms'

export class UpdateGroupForm extends TypedFormGroup<UpdateGroup> {
  constructor(value: Group) {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),

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
    this.patchValue(value)
  }
}
