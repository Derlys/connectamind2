import { TestBed } from '@angular/core/testing';

import { ShyftApiService } from './shyft-api.service';

describe('ShyftApiService', () => {
  let service: ShyftApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShyftApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
