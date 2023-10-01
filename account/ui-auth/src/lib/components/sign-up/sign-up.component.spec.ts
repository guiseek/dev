import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ComponentFixture, TestBed} from '@angular/core/testing'
import {ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatIconModule} from '@angular/material/icon'
import {MatNativeDateModule} from '@angular/material/core'
import {SignUpComponent} from './sign-up.component'

describe('SignUpComponent', () => {
  let component: SignUpComponent
  let fixture: ComponentFixture<SignUpComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
      ],
      declarations: [SignUpComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SignUpComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
