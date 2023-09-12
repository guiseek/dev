import {ComponentFixture, TestBed} from '@angular/core/testing'
import {CreateContentDialog} from './create-content.dialog'

describe('CreateContentDialog', () => {
  let component: CreateContentDialog
  let fixture: ComponentFixture<CreateContentDialog>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
