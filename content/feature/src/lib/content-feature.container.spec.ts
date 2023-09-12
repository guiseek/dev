import {ComponentFixture, TestBed} from '@angular/core/testing'
import {ContentFeatureContainer} from './content-feature.container'

describe('ContentFeatureContainer', () => {
  let component: ContentFeatureContainer
  let fixture: ComponentFixture<ContentFeatureContainer>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentFeatureContainer],
    }).compileComponents()

    fixture = TestBed.createComponent(ContentFeatureContainer)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
