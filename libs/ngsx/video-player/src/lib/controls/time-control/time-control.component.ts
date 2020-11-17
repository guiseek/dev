import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngsx-time-control',
  templateUrl: './time-control.component.html',
  styleUrls: ['./time-control.component.scss']
})
export class TimeControlComponent {
  @Input() public video: HTMLVideoElement;
}
