import {ChangeDetectionStrategy, Component, Inject} from '@angular/core'
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import {Content} from '@dev/content-data-access'
import {UpdateContentForm} from '../../forms'
import {of} from 'rxjs'

@Component({
  selector: 'dev-update-content',
  templateUrl: './update-content.dialog.html',
  styleUrls: ['./update-content.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateContentDialog {
  form: UpdateContentForm

  message$ = of<string | null>(null)

  constructor(@Inject(MAT_DIALOG_DATA) readonly data: Content) {
    this.form = new UpdateContentForm(data)
  }
}
