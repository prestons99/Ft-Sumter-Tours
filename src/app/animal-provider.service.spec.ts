import { TestBed } from '@angular/core/testing';

import { AnimalProviderService } from './animal-provider.service';

describe('AnimalProviderService', () => {
  let service: AnimalProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
