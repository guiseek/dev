import {SelectionModel} from '@angular/cdk/collections'
import {map} from 'rxjs'

export class SelectionMenu<T> extends SelectionModel<T> {
  get selected$() {
    return this.changed.asObservable().pipe(map(() => this.selected))
  }
}
