import {ChangeDetectionStrategy, Component, Inject} from '@angular/core'
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import {Rail} from '@dev/learning-data-access'
import {UpdateRailForm} from '../../forms'
import {of} from 'rxjs'

@Component({
  selector: 'dev-update-rail',
  templateUrl: './update-rail.dialog.html',
  styleUrls: ['./update-rail.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateRailDialog {
  form: UpdateRailForm

  message$ = of<string | null>(null)

  constructor(@Inject(MAT_DIALOG_DATA) data: Rail) {
    this.form = new UpdateRailForm(data)
  }
}
