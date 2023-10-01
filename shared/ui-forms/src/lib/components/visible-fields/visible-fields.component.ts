import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {
  Input,
  OnInit,
  inject,
  DestroyRef,
  Component,
  Renderer2,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core'
import {
  NgControl,
  FormControl,
  SelectControlValueAccessor,
} from '@angular/forms'
import {FieldOption} from '../../interfaces'

type ExtraVisibleFields = 'select' | 'actions'

@Component({
  selector: 'dev-visible-fields',
  templateUrl: './visible-fields.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class VisibleFieldsComponent
  extends SelectControlValueAccessor
  implements OnInit
{
  @Input({required: true})
  fields: FieldOption[] = []

  @Input() id?: string

  @Input() extra: ExtraVisibleFields[] = []

  get showSelectOption() {
    return this.extra.includes('select')
  }

  get showActionsOption() {
    return this.extra.includes('actions')
  }

  get control() {
    return this.ngControl.control as FormControl<string[]>
  }

  constructor(
    renderer2: Renderer2,
    elementRef: ElementRef,
    readonly ngControl: NgControl
  ) {
    super(renderer2, elementRef)

    ngControl.valueAccessor = this
  }

  destroyRef = inject(DestroyRef)

  ngOnInit() {
    const idForStoreOnStorage = this.id

    if (idForStoreOnStorage) {
      const value = this.getStore(idForStoreOnStorage)
      if (value) this.control.setValue(value)

      this.control.valueChanges
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(this.setStore(idForStoreOnStorage))
    }
  }

  getStore = (id: string) => {
    return JSON.parse(localStorage.getItem(id) ?? 'null')
  }

  setStore = (id: string) => (value: string[]) => {
    localStorage.setItem(id, JSON.stringify(value))
  }
}
