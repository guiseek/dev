import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core'
import { FullscreenService } from '../../fullscreen.service'
import { EventService } from '../../event.service'

@Component({
  selector: 'ngsx-fullscreen-button',
  templateUrl: './fullscreen-button.component.html',
  styleUrls: ['./fullscreen-button.component.css'],
})
export class FullscreenButtonComponent implements OnInit {
  canFullscreen = false

  @Input() player: HTMLVideoElement

  @Input() fullscreen = false

  @Output() fullscreenChanged = new EventEmitter<boolean>()

  @Input() keyboard = true

  constructor(private fscreen: FullscreenService, private evt: EventService) {}

  ngOnInit(): void {
    if (this.fscreen.isEnabled()) this.canFullscreen = true

    this.fscreen.onChange((event) =>
      this.fscreen.isFullscreen()
        ? this.onChangesFullscreen(true)
        : this.onChangesFullscreen(false)
    )
  }

  setFullscreen(value: boolean) {
    if (this.canFullscreen && this.fullscreen !== value) this.toggleFullscreen()
  }

  toggleFullscreen(): void {
    this.fullscreen = !this.fullscreen
    this.updateFullscreen()
  }

  updateFullscreen(): void {
    this.fullscreen ? this.fscreen.request(this.player) : this.fscreen.exit()
    this.fullscreenChanged.emit(this.fullscreen)
  }

  onChangesFullscreen(value: boolean): void {
    this.fullscreen = value
    this.fullscreenChanged.emit(this.fullscreen)
  }

  @HostListener('document:keyup.f', ['$event'])
  onFullscreenKey(event: KeyboardEvent) {
    if (this.keyboard) {
      this.toggleFullscreen()
      event.preventDefault()
    }
  }
}
