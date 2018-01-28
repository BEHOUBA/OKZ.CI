import { TestBed, inject } from '@angular/core/testing';

import { CreateAdsService } from './create-ads.service';

describe('CreateAdsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateAdsService]
    });
  });

  it('should be created', inject([CreateAdsService], (service: CreateAdsService) => {
    expect(service).toBeTruthy();
  }));
});
