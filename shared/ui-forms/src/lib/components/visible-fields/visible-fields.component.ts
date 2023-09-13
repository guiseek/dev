import {
  Input,
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
})
export class VisibleFieldsComponent extends SelectControlValueAccessor {
  @Input({required: true})
  fields: FieldOption[] = []

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
}
