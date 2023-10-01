import {ChangeDetectionStrategy, Component, Inject} from '@angular/core'
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import {UpdatePasswordForm} from '../../forms'
import {User} from '@dev/account-data-access'
import {of} from 'rxjs'

@Component({
  selector: 'dev-update-password',
  templateUrl: './update-password.dialog.html',
  styleUrls: ['./update-password.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdatePasswordDialog {
  form: UpdatePasswordForm

  message$ = of<string | null>(null)

  constructor(@Inject(MAT_DIALOG_DATA) data: User) {
    this.form = new UpdatePasswordForm(data)
  }
}
