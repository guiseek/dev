import { AfterViewInit, Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[devAutofocus], [autofocus]',
})
export class AutofocusDirective implements AfterViewInit {
  constructor(public elRef: ElementRef<HTMLElement>) {
    // console.log(this.elRef)
    // console.log(document.activeElement)
  }

  ngAfterViewInit() {
    if (this.elRef) {
      this.elRef.nativeElement.focus()
    }
  }
}
