import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core'
import {User} from '@dev/account-data-access'
import {UpdateUserForm} from '../../forms'
import {of} from 'rxjs'

@Component({
  selector: 'dev-update-user',
  templateUrl: './update-user.dialog.html',
  styleUrls: ['./update-user.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateUserDialog {
  form: UpdateUserForm

  message$ = of<string | null>(null)

  constructor(
    readonly ref: MatDialogRef<UpdateUserDialog>,
    @Inject(MAT_DIALOG_DATA) readonly data: User
  ) {
    this.form = new UpdateUserForm(data)
  }

  onSubmit() {
    if (this.form.valid) {
      this.ref.close(this.form.value)
    } else {
      this.form.markAllAsTouched()
    }
  }
}
