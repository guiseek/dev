import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CreateGroupForm} from '../../forms'
import {CreateGroup} from '@dev/account-data-access'
import {FormDialog} from '@dev/shared-ui-base'

@Component({
  selector: 'dev-create-group',
  templateUrl: './create-group.dialog.html',
  styleUrls: ['./create-group.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateGroupDialog extends FormDialog<CreateGroup> {
  form = new CreateGroupForm()

  onPermissionChange(permission: number) {
    this.form.patchValue({permission})
  }
}
