import {ChangeDetectionStrategy, Component, Inject} from '@angular/core'
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import {Group} from '@dev/account-data-access'
import {UpdateGroupForm} from '../../forms'
import {of} from 'rxjs'

@Component({
  selector: 'dev-update-group',
  templateUrl: './update-group.dialog.html',
  styleUrls: ['./update-group.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateGroupDialog {
  form: UpdateGroupForm

  message$ = of<string | null>(null)

  constructor(@Inject(MAT_DIALOG_DATA) data: Group) {
    this.form = new UpdateGroupForm(data)
  }

  onPermissionChange(permission: number) {
    this.form.patchValue({permission})
  }
}
