import { TestBed } from '@angular/core/testing';

import { AirlineGuard } from './airline.guard';

describe('AirlineGuard', () => {
  let guard: AirlineGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AirlineGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
