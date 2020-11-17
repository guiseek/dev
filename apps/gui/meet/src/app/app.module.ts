import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

// App Modules
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { SharedModule } from './shared/shared.module'
import { UserModule } from './user/user.module'

// Firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [
    UserModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
