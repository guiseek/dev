import {ComponentFixture, TestBed} from '@angular/core/testing'
import {CreateContentDialog} from './create-content.dialog'
import {MatDialogModule} from '@angular/material/dialog'
import {ReactiveFormsModule} from '@angular/forms'
import {UiFormsModule} from '@dev/shared-ui-forms'

describe('CreateContentDialog', () => {
  let component: CreateContentDialog
  let fixture: ComponentFixture<CreateContentDialog>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiFormsModule, MatDialogModule, ReactiveFormsModule],
      declarations: [CreateContentDialog],
    }).compileComponents()

    fixture = TestBed.createComponent(CreateContentDialog)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
