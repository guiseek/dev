import {
  Input,
  Output,
  Component,
  ViewChild,
  OnDestroy,
  Renderer2,
  ElementRef,
  EventEmitter,
  AfterViewInit,
} from '@angular/core'
import { ColorPalette } from './color-palette.type'
import { EventHandler } from './event-handler.interface'
import { EventService } from './event.service'

@Component({
  selector: 'ngsx-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('player') private player: ElementRef<HTMLDivElement>
  @ViewChild('video') private video: ElementRef<HTMLVideoElement>

  @Input() src: string = null
  @Input() title: string = null
  @Input() autoplay = false
  @Input() preload = true
  @Input() loop = false
  @Input() quality = true
  @Input() fullscreen = true
  @Input() showFrameByFrame = false
  @Input() fps = 29.97

  @Input() color: ColorPalette = 'primary'
  @Input() poster: string = null;

  @Input() keyboard = true
  @Input() overlay: boolean = null
  @Input() muted = false
  @Output() mutedChange = new EventEmitter<boolean>()

  @Input()
  get time() {
    return this.getVideoTag().currentTime
  }
  @Output() timeChange = new EventEmitter<number>()
  set time(val: number) {
    const video: HTMLVideoElement = this.getVideoTag()
    if (video && val) {
      if (val > video.duration) {
        val = video.duration
      }
      if (val < 0) {
        val = 0
      }
      if (val !== video.currentTime) {
        video.currentTime = val
      }
      if (this.lastTime !== video.currentTime) {
        setTimeout(() => this.timeChange.emit(video.currentTime), 0)
        this.lastTime = video.currentTime
      }
    }
  }

  playing = false

  isFullscreen = false

  videoWidth: number
  videoHeight: number
  lastTime: number

  videoLoaded = false

  private isMouseMoving = false
  private isMouseMovingTimer: number
  private isMouseMovingTimeout = 2000

  private events: EventHandler[]

  constructor(private renderer: Renderer2, private evt: EventService) {}

  ngAfterViewInit(): void {
    this.events = [
      {
        element: this.video?.nativeElement,
        name: 'loadstart',
        callback: (event) => (this.videoLoaded = false),
        dispose: null,
      },
      {
        element: this.video?.nativeElement,
        name: 'loadedmetadata',
        callback: (event) => this.evLoadedMetadata(event),
        dispose: null,
      },
      {
        element: this.video?.nativeElement,
        name: 'error',
        callback: (event) => console.error('Unhandled Video Error', event),
        dispose: null,
      },
      {
        element: this.video?.nativeElement,
        name: 'contextmenu',
        callback: (event) => event.preventDefault(),
        dispose: null,
      },
      {
        element: this.video?.nativeElement,
        name: 'timeupdate',
        callback: (event) => this.evTimeUpdate(event),
        dispose: null,
      },
      {
        element: this.player?.nativeElement,
        name: 'mousemove',
        callback: (event) => this.evMouseMove(event),
        dispose: null,
      },
    ]

    console.log(this.video.nativeElement);

    if (!!this.video && this.video.nativeElement) {
      this.video.nativeElement.addEventListener(
        'loadeddata',
        () => (this.videoLoaded = true)
      )
    }

    this.evt.addEvents(this.renderer, this.events)
  }

  evLoadedMetadata(event: any): void {
    this.videoWidth = this.video.nativeElement.videoWidth
    this.videoHeight = this.video.nativeElement.videoHeight
    this.videoLoaded = true
  }

  evMouseMove(event: any): void {
    this.isMouseMoving = true
    clearTimeout(this.isMouseMovingTimer)
    this.isMouseMovingTimer = window.setTimeout(() => {
      this.isMouseMoving = false
    }, this.isMouseMovingTimeout)
  }

  evTimeUpdate(event: any): void {
    this.time = this.getVideoTag().currentTime
  }

  getOverlayClass(activeClass: string, inactiveClass: string): any {
    if (this.overlay === null) {
      return !this.playing || this.isMouseMoving ? activeClass : inactiveClass
    } else {
      return this.overlay ? activeClass : inactiveClass
    }
  }

  load(): void {
    if (this.video && this.video.nativeElement) this.video.nativeElement.load()
  }

  getVideoTag(): HTMLVideoElement | null {
    return this.video && this.video.nativeElement
      ? (this.video.nativeElement as HTMLVideoElement)
      : null
  }

  ngOnDestroy(): void {
    this.video.nativeElement.onloadeddata = null

    this.evt.removeEvents(this.events)
  }
}
