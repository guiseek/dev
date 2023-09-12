import {ComponentFixture, TestBed} from '@angular/core/testing'
import {UpdateContentDialog} from './update-content.dialog'
import { MatDialogModule } from '@angular/material/dialog'
import { ReactiveFormsModule } from '@angular/forms'
import { UiFormsModule } from '@dev/shared-ui-forms'

describe('UpdateContentDialog', () => {
  let component: UpdateContentDialog
  let fixture: ComponentFixture<UpdateContentDialog>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiFormsModule, MatDialogModule, ReactiveFormsModule],
      declarations: [UpdateContentDialog],
    }).compileComponents()

    fixture = TestBed.createComponent(UpdateContentDialog)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
