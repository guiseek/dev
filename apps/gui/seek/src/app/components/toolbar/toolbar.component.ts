import { BehaviorSubject } from 'rxjs'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'seek-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() title: string
  isDark = new BehaviorSubject<boolean>(false)
  isDark$ = this.isDark.asObservable()

  toggle() {
    this.isDark.next(!this.isDark.value)
  }
}
