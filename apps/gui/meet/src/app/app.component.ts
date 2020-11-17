import { ToolbarComponent } from './shared/toolbar/toolbar.component'
import {
  AfterViewInit,
  Component,
  Inject,
  Renderer2,
  ViewChild,
} from '@angular/core'
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'meet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'gui-meet'

  @ViewChild(ToolbarComponent)
  toolbar: ToolbarComponent

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    this.toolbar.isDark$.subscribe((mode) => {
      const theme = mode ? 'dark-theme' : 'light-theme'
      this.renderer.setAttribute(this.document.body, 'class', theme)
    })
  }
}
