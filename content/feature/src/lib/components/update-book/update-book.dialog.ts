import {ChangeDetectionStrategy, Component, Inject} from '@angular/core'
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import {Book} from '@dev/content-data-access'
import {UpdateBookForm} from '../../forms'
import {of} from 'rxjs'

@Component({
  selector: 'dev-update-book',
  templateUrl: './update-book.dialog.html',
  styleUrls: ['./update-book.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateBookDialog {
  form: UpdateBookForm

  message$ = of<string | null>(null)

  constructor(@Inject(MAT_DIALOG_DATA) data: Book) {
    this.form = new UpdateBookForm(data)
  }
}
