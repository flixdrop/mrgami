import { TestBed } from '@angular/core/testing';

import { SellerFormApiService } from './seller-form-api.service';

describe('SellerFormApiService', () => {
  let service: SellerFormApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerFormApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
