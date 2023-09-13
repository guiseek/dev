import {ChangeDetectionStrategy, Component} from '@angular/core'
import {MatDialogRef} from '@angular/material/dialog'
import {CreateContentForm} from '../../forms'
import {of} from 'rxjs'

@Component({
  selector: 'dev-create-content',
  templateUrl: './create-content.dialog.html',
  styleUrls: ['./create-content.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateContentDialog {
  form = new CreateContentForm()

  message$ = of<string | null>(null)

  constructor(readonly ref: MatDialogRef<CreateContentDialog>) {}

  onSubmit() {
    if (this.form.valid) {
      this.ref.close(this.form.value)
    } else {
      this.form.markAllAsTouched()
    }
  }
}
