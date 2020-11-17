import { Component, Input } from '@angular/core'

@Component({
  selector: 'ngsx-frame-control',
  templateUrl: './frame-control.component.html',
  styleUrls: ['./frame-control.component.scss'],
})
export class FrameControlComponent {
  @Input() video: HTMLVideoElement
  @Input() fps = 29.97

  seekFrames(nbFrames: number) {
    if (!this.video.paused) {
      this.video.pause()
    }

    const currentFrames = this.video.currentTime * this.fps
    const newPos = (currentFrames + nbFrames) / this.fps + 0.00001
    this.video.currentTime = newPos
  }
}
