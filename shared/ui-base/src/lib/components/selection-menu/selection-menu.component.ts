import {Input, Component, ContentChild} from '@angular/core'
import {MatMenu} from '@angular/material/menu'
import {SelectionMenu} from './selection-menu'

@Component({
  selector: 'dev-selection-menu',
  template: `
    <button
      mat-stroked-button
      [disabled]="selection.hasValue() === false"
      [matMenuTriggerFor]="menu"
    >
      <mat-icon>checklist</mat-icon>
      <span>Com selecionados</span>
    </button>
    <ng-content select="mat-menu"></ng-content>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class SelectionMenuComponent<T> {
  @ContentChild(MatMenu)
  menu: MatMenu

  @Input({required: true})
  selection!: SelectionMenu<T>
}
