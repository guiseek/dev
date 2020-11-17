import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core'

@Component({
  selector: 'meet-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent implements AfterContentInit {
  @ContentChild('video', {
    read: HTMLVideoElement,
  })
  video: HTMLVideoElement

  constructor() {}

  ngAfterContentInit(): void {
    console.log('this.video: ', this.video);

  }
}
