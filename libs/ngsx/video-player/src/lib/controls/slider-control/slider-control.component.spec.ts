/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SliderControlComponent } from './slider-control.component';

describe('SliderControlComponent', () => {
  let component: SliderControlComponent;
  let fixture: ComponentFixture<SliderControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
