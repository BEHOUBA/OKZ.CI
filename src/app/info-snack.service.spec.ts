import { TestBed, inject } from '@angular/core/testing';

import { InfoSnackService } from './info-snack.service';

describe('InfoSnackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoSnackService]
    });
  });

  it('should be created', inject([InfoSnackService], (service: InfoSnackService) => {
    expect(service).toBeTruthy();
  }));
});
