import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CreateContentForm} from '../../forms'
import {CreateContent} from '@dev/content-data-access'
import {FormDialog} from '@dev/ui-base'

@Component({
  selector: 'dev-create-content',
  templateUrl: './create-content.dialog.html',
  styleUrls: ['./create-content.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateContentDialog extends FormDialog<CreateContent> {
  form = new CreateContentForm()
}
