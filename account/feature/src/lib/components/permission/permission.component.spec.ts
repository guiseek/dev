import {ComponentFixture, TestBed} from '@angular/core/testing'
import {PermissionComponent} from './permission.component'
import {SharedMaterial} from '@dev/shared-ui-base'
import {UiFormsModule} from '@dev/shared-ui-forms'
import {ReactiveFormsModule} from '@angular/forms'
import {Component, ViewChild} from '@angular/core'
import {UpdateGroupForm} from '../../forms'

@Component({
  template: `
    <form [formGroup]="form" (submit)="form.submit()">
      <dev-permission
        (valueChange)="onPermissionChange($event)"
      ></dev-permission>
      <footer class="row-reverse">
        <button>Enviar</button>
        <button type="button">Cancelar</button>
      </footer>
    </form>
  `,
})
class ParentTestComponent {
  form = new UpdateGroupForm({
    id: '',
    name: '',
    label: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    permission: 5,
  })

  @ViewChild(PermissionComponent)
  permissionComponent: PermissionComponent

  onPermissionChange(permission: number) {
    this.form.patchValue({permission})
  }
}

describe('PermissionComponent', () => {
  let component: ParentTestComponent
  let fixture: ComponentFixture<ParentTestComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedMaterial, ReactiveFormsModule, UiFormsModule],
      declarations: [ParentTestComponent, PermissionComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ParentTestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should start with permission checked', () => {
    expect(component.permissionComponent.form.value).toStrictEqual({
      r: true,
      w: false,
      x: true,
    })
  })

  it('should emit changes correct value', async () => {
    jest.spyOn(component, 'onPermissionChange')

    component.permissionComponent.form.patchValue({r: true, w: true, x: true})

    expect(component.onPermissionChange).toBeCalledWith(7)
  })
})
