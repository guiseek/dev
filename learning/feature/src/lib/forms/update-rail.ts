import {FormControl, Validators} from '@angular/forms'
import {Rail, UpdateRail} from '@dev/learning-data-access'
import {TypedFormGroup} from '@dev/shared-ui-forms'

export class UpdateRailForm extends TypedFormGroup<UpdateRail> {
  constructor(value: Rail) {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      name: new FormControl(),
    })
    this.patchValue(value)
  }
}
