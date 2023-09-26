import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CreateBookForm} from '../../forms'
import {CreateBook} from '@dev/content-data-access'
import {FormDialog} from '@dev/shared-ui-base'

@Component({
  selector: 'dev-create-book',
  templateUrl: './create-book.dialog.html',
  styleUrls: ['./create-book.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateBookDialog extends FormDialog<CreateBook> {
  form = new CreateBookForm()
}
