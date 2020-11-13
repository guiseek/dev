import { DialogModule } from './dialog/dialog.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { PortalModule } from '@angular/cdk/portal'
import { OverlayModule } from '@angular/cdk/overlay'
import { firebaseConfig } from './../environments/environment'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import {
  AngularFireAuthGuardModule,
  redirectUnauthorizedTo,
  canActivate,
} from '@angular/fire/auth-guard'

import { HomePage } from './home/home.page'
import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { A11yModule } from '@angular/cdk/a11y'
import { ReactiveFormsModule } from '@angular/forms'
import { PersonForm } from './form/person/person.form'
import { AutofocusDirective } from './shared/autofocus.directive'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

const routes = [
  {
    path: '',
    ...canActivate(() => redirectUnauthorizedTo(['home'])),
    loadChildren: () =>
      import('./board/board.module').then((m) => m.BoardModule),
  },
  {
    path: 'home',
    component: HomePage,
  },
]
@NgModule({
  declarations: [AppComponent, PersonForm, AutofocusDirective, HomePage],
  imports: [
    A11yModule,
    DialogModule,
    PortalModule,
    OverlayModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireAuthGuardModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
