import { FormControl } from '@angular/forms'
import {
  AfterViewInit,
  Component,
  HostBinding,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core'
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib'
import { DOCUMENT } from '@angular/common'
import { ToolbarComponent } from './components/toolbar/toolbar.component'

@Component({
  selector: 'seek-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'gui-seek'
  @ViewChild(ToolbarComponent)
  toolbar: ToolbarComponent

  notes$ = this.scully.available$
  searchControl = new FormControl()

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private scully: ScullyRoutesService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      console.log(this.toolbar)
    })
    this.toolbar.isDark$.subscribe((mode) => {
      const theme = mode ? 'dark-theme' : 'light-theme'
      this.renderer.setAttribute(this.document.body, 'class', theme)
    })
  }
}
