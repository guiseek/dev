import {FormControl, Validators} from '@angular/forms'
import {Book, UpdateBook} from '@dev/content-data-access'
import {TypedFormGroup} from '@dev/shared-ui-forms'

export class UpdateBookForm extends TypedFormGroup<UpdateBook> {
  constructor(value: Book) {
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
