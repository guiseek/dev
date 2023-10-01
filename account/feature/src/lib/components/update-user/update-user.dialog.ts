import {ChangeDetectionStrategy, Component, Inject} from '@angular/core'
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
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

  constructor(@Inject(MAT_DIALOG_DATA) data: User) {
    this.form = new UpdateUserForm(data)
  }
}
