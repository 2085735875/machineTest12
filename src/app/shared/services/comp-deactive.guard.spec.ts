import { TestBed } from '@angular/core/testing';

import { CompDeactiveGuard } from './comp-deactive.guard';

describe('CompDeactiveGuard', () => {
  let guard: CompDeactiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CompDeactiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
