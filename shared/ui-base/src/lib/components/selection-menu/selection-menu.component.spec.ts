import {ComponentFixture, TestBed} from '@angular/core/testing'
import {SelectionMenuComponent} from './selection-menu.component'

describe('SelectionMenuComponent', () => {
  let component: SelectionMenuComponent
  let fixture: ComponentFixture<SelectionMenuComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectionMenuComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SelectionMenuComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
