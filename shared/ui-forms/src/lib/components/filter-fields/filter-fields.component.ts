import {
  Input,
  OnInit,
  Output,
  Component,
  DestroyRef,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {FilterFieldsForm} from './filter-fields.form'
import {FieldOption} from '../../interfaces'
import {debounceTime} from 'rxjs'

function makeFilter<T>(fields: T[] = [], value: string | null) {
  return fields.reduce((prev, curr) => ({...prev, [`${curr}`]: value}), {})
}

@Component({
  selector: 'dev-filter-fields',
  templateUrl: './filter-fields.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterFieldsComponent<T extends object> implements OnInit {
  @Input() form = new FilterFieldsForm<T>()

  @Input({required: true})
  fields: FieldOption[] = []

  @Output() filterChange = new EventEmitter<Record<string, string>>()

  constructor(private readonly destroyRef: DestroyRef) {}

  ngOnInit() {
    this.form.valueChanges
      .pipe(debounceTime(400), takeUntilDestroyed(this.destroyRef))
      .subscribe(({fields, search = ''}) => {
        this.filterChange.emit(makeFilter(fields, search))
      })
  }
}
