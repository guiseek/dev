import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { MatSlider, MAT_SLIDER_VALUE_ACCESSOR } from '@angular/material/slider'
import { ColorPalette } from '../../color-palette.type'

let sliderprogressbarId = 0

/** Clamps a value to be between two numbers, by default 0 and 100. */
function clamp(v: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v))
}

@Component({
  selector: 'ngsx-slider-control',
  templateUrl: './slider-control.component.html',
  styleUrls: ['./slider-control.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MAT_SLIDER_VALUE_ACCESSOR],
})
export class SliderControlComponent extends MatSlider {
  @Input() mode = 'buffer'
  @Input() tabIndex: number
  @Input() disabled: boolean
  @Input() color: ColorPalette
  @Input()
  get bufferValue(): number {
    return this._bufferValue
  }
  set bufferValue(v: number) {
    this._bufferValue = clamp(v || 0)
  }
  private _bufferValue = 0

  sliderprogressbarId = `mat-slider-progress-bar-${sliderprogressbarId++}`

  get _trackBufferStyles(): { [key: string]: string } {
    if (this.mode === 'buffer') {
      const axis = this.vertical ? 'Y' : 'X'
      return {
        transform: `translate${axis}(0px) scale${axis}(${
          this._bufferValue / 100
        })`,
      }
    }
  }
}
