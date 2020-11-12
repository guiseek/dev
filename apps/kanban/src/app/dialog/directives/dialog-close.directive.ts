import {
  Input,
  Optional,
  Directive,
  HostListener,
  HostBinding,
} from '@angular/core'
import { DialogRef } from '../dialog-ref'

@Directive({
  selector: '[devDialogClose], [dev-dialog-close], dev-dialog-close',
  exportAs: 'devDialogClose',
})
export class DialogCloseDirective<T = any> {
  @Input('devDialogClose') dialogResult!: T
  @HostBinding('class') class = 'dev-dialog-close'

  constructor(@Optional() private dialogRef: DialogRef<T>) {}

  @HostListener('click') onClick(): void {
    if (!this.dialogRef) {
      // console.error('DialogClose is not supported within a template')

      return
    }

    this.dialogRef.close(this.dialogResult)
  }
}
