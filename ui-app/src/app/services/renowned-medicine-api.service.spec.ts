import { TestBed } from '@angular/core/testing';

import { RenownedMedicineApiService } from './renowned-medicine-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('RenownedMedicineApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: RenownedMedicineApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(RenownedMedicineApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all specialists from renowned-medicine-api', () => {
    const mockData = { name: 'Dr. Pepper', specialty: 'Serving bubbly Rx drinks' };
    const mockResponse = { results: [mockData] };

    service.fetchAllData().subscribe(data => {
      expect(data).toEqual([mockData]);
    });

    const request = httpTestingController.expectOne(`${environment.renownedMedicineApiDomain}/api/specialists`);
    expect(request.request.method).toEqual('GET');
    request.flush(mockResponse);
    httpTestingController.verify();
  });
});
