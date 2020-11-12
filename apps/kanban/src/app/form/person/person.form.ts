import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { DialogRef } from '../../dialog/dialog-ref'

@Component({
  selector: 'dev-person-form',
  templateUrl: './person.form.html',
  styleUrls: ['./person.form.scss'],
})
export class PersonForm extends FormGroup implements OnInit {
  form = this
  constructor(private ref: DialogRef) {
    super({
      name: new FormControl(''),
      email: new FormControl(''),
      lista: new FormControl(''),
    })
  }

  withSpan() {
    this.form.get('name')?.reset()
  }
  withButton() {
    this.form.get('email')?.reset()
  }
  onBlur() {
    console.log('blur');

  }
  ngOnInit(): void {
    console.log(this.ref)
  }
}
