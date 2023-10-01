import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CreateUserForm} from '../../forms'
import {CreateUser} from '@dev/account-data-access'
import {FormDialog} from '@dev/shared-ui-base'

@Component({
  selector: 'dev-create-user',
  templateUrl: './create-user.dialog.html',
  styleUrls: ['./create-user.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserDialog extends FormDialog<CreateUser> {
  form = new CreateUserForm()
}
