import { async, TestBed } from '@angular/core/testing';
import { DialogModule } from './dialog.module';

describe('DialogModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DialogModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DialogModule).toBeDefined();
  });
});
