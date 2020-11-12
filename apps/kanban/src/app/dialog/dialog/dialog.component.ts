import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Component, ComponentRef, EmbeddedViewRef, ViewChild, ElementRef, HostBinding } from '@angular/core';
import { DialogHeader, DialogConfig } from '../dialog-config';
import { DialogRef } from '../dialog-ref';

@Component({
  selector: 'dev-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent extends BasePortalOutlet {
  @ViewChild(CdkPortalOutlet, { static: true }) portalOutlet!: CdkPortalOutlet;
  @HostBinding('class') class = 'mmws-dialog-container'
  header?: DialogHeader
  config: DialogConfig
  // ref: DialogRef
  constructor(
    public ref: DialogRef,
    public _elementRef: ElementRef
  ) {
    super();
    this.config = ref.config
  }

  attachComponentPortal<T>(componentPortal: ComponentPortal<any>): ComponentRef<T> {
    return this.portalOutlet.attachComponentPortal(componentPortal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    return this.portalOutlet.attachTemplatePortal(portal);
  }
}
