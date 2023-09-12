import {ComponentFixture, TestBed} from '@angular/core/testing'
import {UpdateContentDialog} from './update-content.dialog'

describe('UpdateContentDialog', () => {
  let component: UpdateContentDialog
  let fixture: ComponentFixture<UpdateContentDialog>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
