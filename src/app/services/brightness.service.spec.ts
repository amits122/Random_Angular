import { TestBed, inject } from '@angular/core/testing';

import { BrightnessService } from './brightness.service';

describe('BrightnessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrightnessService]
    });
  });

  it('should be created', inject([BrightnessService], (service: BrightnessService) => {
    expect(service).toBeTruthy();
  }));
});
