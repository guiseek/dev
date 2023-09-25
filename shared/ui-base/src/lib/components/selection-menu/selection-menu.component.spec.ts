import {ComponentFixture, TestBed} from '@angular/core/testing'
import {SelectionMenuComponent} from './selection-menu.component'
import {MatIconModule} from '@angular/material/icon'
import {SelectionMenu} from './selection-menu'
import {MatMenuModule} from '@angular/material/menu'

describe('SelectionMenuComponent', () => {
  let component: SelectionMenuComponent<unknown>
  let fixture: ComponentFixture<SelectionMenuComponent<unknown>>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIconModule, MatMenuModule],
      declarations: [SelectionMenuComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SelectionMenuComponent)
    component = fixture.componentInstance
    fixture.componentRef.setInput('selection', new SelectionMenu())
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
