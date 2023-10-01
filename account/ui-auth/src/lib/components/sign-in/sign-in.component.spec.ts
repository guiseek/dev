import {ComponentFixture, TestBed} from '@angular/core/testing'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatIconModule} from '@angular/material/icon'
import {MatNativeDateModule} from '@angular/material/core'
import {SignInComponent} from './sign-in.component'

describe('SignInComponent', () => {
  let component: SignInComponent
  let fixture: ComponentFixture<SignInComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
      ],
      declarations: [SignInComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SignInComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
