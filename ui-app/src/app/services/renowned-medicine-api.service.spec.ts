import { TestBed } from '@angular/core/testing';

import { RenownedMedicineApiService } from './renowned-medicine-api.service';

describe('RenownedMedicineApiService', () => {
  let service: RenownedMedicineApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenownedMedicineApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
