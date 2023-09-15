import {ComponentFixture, TestBed} from '@angular/core/testing'
import {FilterByComponent} from './filter-by.component'

describe('FilterByComponent', () => {
  let component: FilterByComponent
  let fixture: ComponentFixture<FilterByComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterByComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FilterByComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
