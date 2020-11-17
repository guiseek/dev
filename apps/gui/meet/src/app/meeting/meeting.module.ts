import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgsxVideoPlayerModule } from '@ngsx/video-player';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MeetingRoutingModule } from './meeting-routing.module'
import { MeetingComponent } from './meeting.component'
import { SharedModule } from '../shared/shared.module'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatDialogModule } from '@angular/material/dialog'
import { VideoCardComponent } from './video-card/video-card.component'

@NgModule({
  declarations: [MeetingComponent, VideoCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonToggleModule,
    NgsxVideoPlayerModule,
    ReactiveFormsModule,
    MeetingRoutingModule,
  ],
})
export class MeetingModule {}
