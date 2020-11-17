import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatSliderModule } from '@angular/material/slider'
import { VideoPlayerComponent } from './video-player.component'
import {
  VolumeControlComponent,
  TimeControlComponent,
  QualityControlComponent,
  FrameControlComponent,
  ProgressControlComponent,
  SliderControlComponent,
} from './controls'
import { FormatTimePipe } from './format-time.pipe'
import { FullscreenService } from './fullscreen.service'
import { FullscreenButtonComponent, PlayButtonComponent } from './buttons'

@NgModule({
  imports: [CommonModule, MatSliderModule, MatButtonModule],
  declarations: [
    FormatTimePipe,
    PlayButtonComponent,
    VideoPlayerComponent,
    TimeControlComponent,
    FrameControlComponent,
    SliderControlComponent,
    VolumeControlComponent,
    QualityControlComponent,
    ProgressControlComponent,
    FullscreenButtonComponent,
  ],
  providers: [FullscreenService],
  exports: [VideoPlayerComponent],
})
export class NgsxVideoPlayerModule {}
