import {
  Output,
  Component,
  ViewChild,
  ElementRef,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core'
import {SignIn, SignInForm} from '../../forms'
import {of} from 'rxjs'

@Component({
  selector: 'dev-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  @ViewChild('username')
  usernameRef: ElementRef<HTMLInputElement>

  @Output() signIn = new EventEmitter<SignIn>()

  form = new SignInForm()

  message$ = of<string | null>(null)

  focus() {
    this.usernameRef.nativeElement.focus()
  }

  onSubmit() {
    this.form.markAllAsTouched()
    if (this.form.valid) {
      this.signIn.emit(this.form.getRawValue())
    }
  }
}
