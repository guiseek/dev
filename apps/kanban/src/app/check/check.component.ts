import {
  OnInit,
  Component,
  forwardRef,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
  Self,
  Optional,
  EventEmitter,
  Output,
  Injectable,
} from '@angular/core'
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms'

@Injectable()
export class ControlAccessor implements ControlValueAccessor {
  protected _value: any
  public get value(): any {
    return this._value
  }
  @Input()
  @HostBinding('attr.value')
  public set value(value: any) {
    console.log('value: ', value)

    this._value = value
  }

  protected _disabled!: boolean

  onChange = () => {}
  onTouched = () => {}

  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this._disabled = isDisabled
  }
}

const DEV_CHECK_PROVIDER = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ControlAccessor),
  multi: true,
}

let nextId = 0

@Component({
  selector: 'dev-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DEV_CHECK_PROVIDER],
})
export class CheckComponent extends ControlAccessor implements OnInit, ControlValueAccessor {
  static nextId = 0

  @Input() label = ''
  @Input() checked = false
  @Input() disabled = false
  @Input() placeholder = ''

  value: any = ''

  private _id = `check-${nextId++}`
  public get id(): string {
    return this._id
  }
  @HostBinding('for') for = this.id

  @Output() valueChange = new EventEmitter()
  @Output() checkedChange = new EventEmitter<HTMLInputElement>()

  constructor(@Self() @Optional() private ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this
    }
  }
  writeValue(value: any): void {
    this.value = value
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  onChange(value: any) {}
  onTouched() {}
  ngOnInit(): void {}
}
