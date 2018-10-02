import { TestBed } from '@angular/core/testing';

import { GetbalanceService } from './getbalance.service';

describe('GetbalanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetbalanceService = TestBed.get(GetbalanceService);
    expect(service).toBeTruthy();
  });
});
