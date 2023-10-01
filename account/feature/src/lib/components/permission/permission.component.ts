import {
  OnInit,
  Output,
  inject,
  Component,
  DestroyRef,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core'
import {PermissionForm, mapToPermission, mapFromPermission} from '../../forms'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {ControlContainer} from '@angular/forms'
import {map} from 'rxjs'

@Component({
  selector: 'dev-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true}),
    },
  ],
})
export class PermissionComponent implements OnInit {
  form = new PermissionForm()

  @Output() valueChange = new EventEmitter<number>()

  destroyRef = inject(DestroyRef)

  container = inject(ControlContainer)

  ngOnInit() {
    this.form.valueChanges
      .pipe(map(mapToPermission), takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.valueChange.emit(value))

    if (this.container) {
      const {permission = 0} = this.container.value ?? {}
      this.form.patchValue(mapFromPermission(permission))
    }
  }
}
