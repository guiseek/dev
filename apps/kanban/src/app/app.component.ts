import { AngularFireAuth } from '@angular/fire/auth';
import { DialogService } from './dialog/dialog.service'
import { Component } from '@angular/core'
import { PersonForm } from './form/person/person.form'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kanban'

  form = new FormGroup({
    accept: new FormControl()
  })
  constructor(
    private dialog: DialogService,
    private afa: AngularFireAuth,
  ) {}

  open() {
    this.afa.signInAnonymously().then(u => console.log(u))
    // const dialog$ = this.dialog.open(PersonForm)
    // dialog$.afterClosed().subscribe(console.log)
  }
}
