import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ComponentFixture, TestBed} from '@angular/core/testing'
import {FilterByComponent} from './filter-by.component'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select'
import {ReactiveFormsModule} from '@angular/forms'
import {PortalModule} from '@angular/cdk/portal'
import {MatIconModule} from '@angular/material/icon'

describe('FilterByComponent', () => {
  let component: FilterByComponent<string>
  let fixture: ComponentFixture<FilterByComponent<string>>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        ReactiveFormsModule,
        PortalModule,
        BrowserAnimationsModule,
      ],
      declarations: [FilterByComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FilterByComponent<string>)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
