import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogComponent } from './dialog/dialog.component';
import { DialogCloseDirective } from './directives/dialog-close.directive';
import { DialogContainerComponent } from './dialog-container';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { DialogService } from './dialog.service';

@NgModule({
  imports: [
    A11yModule,
    CommonModule,
    OverlayModule,
    PortalModule,
    DragDropModule
  ],
  declarations: [
    DialogComponent,
    DialogCloseDirective,
    DialogContainerComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [
    DialogService
  ],
  exports: [
    DialogCloseDirective
  ]
})
export class DialogModule {}
