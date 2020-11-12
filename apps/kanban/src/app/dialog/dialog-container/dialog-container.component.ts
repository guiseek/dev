import { Component, AfterViewInit, ViewContainerRef } from '@angular/core'

@Component({
  selector: 'dev-dialog-container',
  templateUrl: './dialog-container.component.html',
  styleUrls: ['./dialog-container.component.scss'],
})
export class DialogContainerComponent implements AfterViewInit {
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngAfterViewInit() {
    // console.log('view: ', this.viewContainerRef)
  }
}
