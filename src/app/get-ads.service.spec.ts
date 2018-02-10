import { TestBed, inject } from '@angular/core/testing';

import { GetAdsService } from './get-ads.service';

describe('GetAdsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAdsService]
    });
  });

  it('should be created', inject([GetAdsService], (service: GetAdsService) => {
    expect(service).toBeTruthy();
  }));
});
