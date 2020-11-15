import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToolbarComponent } from './components/toolbar/toolbar.component'
import { LayoutModule } from '@angular/cdk/layout'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { CommonModule } from './common/common.module'
import { AppComponent } from './app.component'
import { ScullyLibModule } from '@scullyio/ng-lib'

@NgModule({
  declarations: [AppComponent, ToolbarComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {
          path: 'notes',
          loadChildren: () =>
            import('./notes/notes.module').then((m) => m.NotesModule),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    BrowserAnimationsModule,
    ScullyLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
