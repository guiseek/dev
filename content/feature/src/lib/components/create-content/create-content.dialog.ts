import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CreateContentForm} from '../../forms'
import {of} from 'rxjs'

@Component({
  selector: 'dev-create-content',
  templateUrl: './create-content.dialog.html',
  styleUrls: ['./create-content.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateContentDialog {
  form = new CreateContentForm()

  message$ = of<string | null>(null)
}
