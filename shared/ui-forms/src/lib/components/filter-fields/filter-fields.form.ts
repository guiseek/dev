import {FormControl, FormGroup} from '@angular/forms'

export type FilterFieldsOf<T> = (keyof T)[]

export interface FilterFields<T extends object> {
  fields: FormControl<(keyof T)[]>
  search: FormControl<string | null>
}

export class FilterFieldsForm<T extends object> extends FormGroup<
  FilterFields<T>
> {
  constructor(fields: (keyof T)[] = []) {
    super({
      fields: new FormControl(),
      search: new FormControl(),
    })
    this.patchValue({fields})
  }
}
