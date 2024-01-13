import { TestBed } from '@angular/core/testing';

import { MapacustomerService } from './mapacustomer.service';

describe('MapacustomerService', () => {
  let service: MapacustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapacustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
