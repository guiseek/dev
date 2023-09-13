import {ChangeDetectionStrategy, Component} from '@angular/core'
import {MatDialogRef} from '@angular/material/dialog'
import {CreateUserForm} from '../../forms'
import {of} from 'rxjs'

@Component({
  selector: 'dev-create-user',
  templateUrl: './create-user.dialog.html',
  styleUrls: ['./create-user.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserDialog {
  form = new CreateUserForm()

  message$ = of<string | null>(null)

  constructor(readonly ref: MatDialogRef<CreateUserDialog>) {}

  onSubmit() {
    if (this.form.valid) {
      this.ref.close(this.form.value)
    } else {
      this.form.markAllAsTouched()
    }
  }
}
