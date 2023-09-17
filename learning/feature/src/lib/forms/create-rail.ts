import {FormControl, Validators} from '@angular/forms'
import {CreateRail} from '@dev/learning-data-access'
import {TypedFormGroup} from '@dev/shared-ui-forms'

export class CreateRailForm extends TypedFormGroup<CreateRail> {
  constructor() {
    super({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    })
  }
}
