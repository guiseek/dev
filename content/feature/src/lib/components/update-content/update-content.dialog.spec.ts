import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ComponentFixture, TestBed} from '@angular/core/testing'
import {UpdateContentDialog} from './update-content.dialog'
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog'
import {ReactiveFormsModule} from '@angular/forms'
import {UiFormsModule} from '@dev/shared-ui-forms'

describe('UpdateContentDialog', () => {
  let component: UpdateContentDialog
  let fixture: ComponentFixture<UpdateContentDialog>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UiFormsModule,
        MatDialogModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      declarations: [UpdateContentDialog],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            id: '',
          },
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(UpdateContentDialog)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
