import {
  Output,
  Component,
  ViewChild,
  ElementRef,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core'
import {SignUp, SignUpForm} from '../../forms'
import {of} from 'rxjs'

@Component({
  selector: 'dev-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  @ViewChild('name')
  nameRef: ElementRef<HTMLInputElement>

  @Output() signUp = new EventEmitter<SignUp>()

  form = new SignUpForm()

  message$ = of<string | null>(null)

  focus() {
    this.nameRef.nativeElement.focus()
  }

  onSubmit() {
    this.form.markAllAsTouched()
    if (this.form.valid) {
      this.signUp.emit(this.form.getValue())
    }
  }
}
