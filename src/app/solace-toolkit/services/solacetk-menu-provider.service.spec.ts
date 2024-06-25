import { TestBed } from '@angular/core/testing';

import { SolacetkMenuProviderService } from './solacetk-menu-provider.service';

describe('SolacetkMenuProviderService', () => {
  let service: SolacetkMenuProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolacetkMenuProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
