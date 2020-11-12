import { CheckModule } from './check/check.module';
import { DialogModule } from './dialog/dialog.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { PortalModule } from '@angular/cdk/portal'
import { OverlayModule } from '@angular/cdk/overlay'

import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { PersonForm } from './form/person/person.form'
import { ReactiveFormsModule } from '@angular/forms'
import { A11yModule } from '@angular/cdk/a11y';
import { AutofocusDirective } from './shared/autofocus.directive'

@NgModule({
  declarations: [AppComponent, PersonForm, AutofocusDirective],
  imports: [
    BrowserModule,
    A11yModule,
    CheckModule,
    PortalModule,
    OverlayModule,
    DialogModule,
    ReactiveFormsModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
