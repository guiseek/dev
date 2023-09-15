import {FieldType, FilterBy, FilterByFieldOption} from '../../interfaces'
import {FormControl, Validators} from '@angular/forms'
import {TypedFormGroup} from '../../base'

export class FilterByForm<T extends FieldType = string> extends TypedFormGroup<
  FilterBy<T>
> {
  constructor(value?: FilterByFieldOption & string) {
    super({
      field: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      value: new FormControl(),
    })
    if (value) {
      this.controls.field.patchValue(value)
    }
  }
}
