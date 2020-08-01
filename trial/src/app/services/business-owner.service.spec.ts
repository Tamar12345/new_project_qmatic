import { TestBed, inject } from '@angular/core/testing';

import { BusinessOwnerService } from './business-owner.service';

describe('BusinessOwnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessOwnerService]
    });
  });

  it('should be created', inject([BusinessOwnerService], (service: BusinessOwnerService) => {
    expect(service).toBeTruthy();
  }));
});
