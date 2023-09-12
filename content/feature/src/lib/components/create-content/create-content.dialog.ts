import {ChangeDetectionStrategy, Component} from '@angular/core'
import {MatDialogRef} from '@angular/material/dialog'
import {CreateContentForm} from '../../forms'

@Component({
  selector: 'dev-create-content',
  templateUrl: './create-content.dialog.html',
  styleUrls: ['./create-content.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateContentDialog {
  form = new CreateContentForm()

  constructor(readonly ref: MatDialogRef<CreateContentDialog>) {}

  onSubmit() {
    if (this.form.valid) {
      this.ref.close(this.form.value)
    } else {
      this.form.markAllAsTouched()
    }
  }
}
