import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CreateContent} from '@dev/content-data-access'
import {CreateContentForm} from '../../forms'
import {FormDialog} from '@dev/shared-ui-base'

@Component({
  selector: 'dev-create-content',
  templateUrl: './create-content.dialog.html',
  styleUrls: ['./create-content.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateContentDialog extends FormDialog<CreateContent> {
  form = new CreateContentForm()
}
