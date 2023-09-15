import {
  Input,
  inject,
  Output,
  OnInit,
  Component,
  ViewChild,
  DestroyRef,
  TemplateRef,
  EventEmitter,
  ViewContainerRef,
  ChangeDetectionStrategy,
} from '@angular/core'
import {TemplatePortal} from '@angular/cdk/portal'
import {FieldType, FilterByFieldOption} from '../../interfaces'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {BehaviorSubject, debounceTime} from 'rxjs'
import {FilterByForm} from './filter-by.form'

@Component({
  selector: 'dev-filter-by',
  templateUrl: './filter-by.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterByComponent<T extends FieldType = string> implements OnInit {
  @ViewChild('boolPortalField')
  boolPortalField: TemplateRef<HTMLElement>

  @ViewChild('numberPortalField')
  numberPortalField: TemplateRef<HTMLElement>

  @ViewChild('textPortalField')
  textPortalField: TemplateRef<HTMLElement>

  @ViewChild('datePortalField')
  datePortalField: TemplateRef<HTMLElement>

  selectedPortal: TemplatePortal

  @Input()
  form = new FilterByForm<T>()

  @Input({required: true})
  fields: FilterByFieldOption[] = []

  @Output()
  filterByChange = new EventEmitter<Record<string, unknown>>()

  #selected = new BehaviorSubject<FilterByFieldOption | null>(null)
  selected$ = this.#selected.asObservable()

  #viewContainerRef = inject(ViewContainerRef)

  onFieldChange(field: FilterByFieldOption) {
    this.#selected.next(field)
    this.form.controls.value.reset()
    this.selectedPortal = new TemplatePortal(
      this.#getTemplateByFieldType(field),
      this.#viewContainerRef
    )
  }

  constructor(private readonly destroyRef: DestroyRef) {}

  ngOnInit() {
    this.form.valueChanges
      .pipe(debounceTime(400), takeUntilDestroyed(this.destroyRef))
      .subscribe(({field, value = ''}) => {
        const prop = (field as FilterByFieldOption).value
        this.filterByChange.emit({[prop]: value})
      })
  }

  #getTemplateByFieldType(field: FilterByFieldOption) {
    switch (field.type) {
      case 'bool':
        return this.boolPortalField
      case 'text':
        return this.textPortalField
      case 'number':
        return this.numberPortalField
      case 'date':
        return this.datePortalField
      default:
        return this.textPortalField
    }
  }
}
