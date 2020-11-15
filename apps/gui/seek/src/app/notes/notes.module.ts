import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {NotesRoutingModule} from './notes-routing.module';
import {NotesComponent} from './notes.component';

@NgModule({
  declarations: [NotesComponent],
  imports: [CommonModule, NotesRoutingModule, ScullyLibModule],
})
export class NotesModule {}
