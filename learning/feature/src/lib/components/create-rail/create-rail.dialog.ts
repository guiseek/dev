import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CreateRail} from '@dev/learning-data-access'
import {FormDialog} from '@dev/shared-ui-base'
import {CreateRailForm} from '../../forms'

@Component({
  selector: 'dev-create-rail',
  templateUrl: './create-rail.dialog.html',
  styleUrls: ['./create-rail.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateRailDialog extends FormDialog<CreateRail> {
  form = new CreateRailForm()
}
