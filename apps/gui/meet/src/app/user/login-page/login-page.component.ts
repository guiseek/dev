import { UserService } from './../user.service';
import { Component } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'meet-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(public service: UserService) {}
}
