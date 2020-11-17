import { Component, Input } from '@angular/core'

@Component({
  selector: 'ngsx-quality-control',
  templateUrl: './quality-control.component.html',
  styleUrls: ['./quality-control.component.scss'],
})
export class QualityControlComponent {
  @Input() video: HTMLVideoElement
}
