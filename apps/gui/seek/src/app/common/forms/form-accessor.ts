import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { forwardRef, Injectable, Provider } from '@angular/core'

@Injectable()
export class SeekControlAccessor implements ControlValueAccessor {
  value: any
  disabled = false
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
    this.disabled = isDisabled
  }

  onChange = (obj: any) => {}
  onTouched = (obj: any) => {}
}

export const SEEK_CONTROL_ACCESSOR: Provider[] = [
  SeekControlAccessor,
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SeekControlAccessor),
    multi: true,
  },
]
