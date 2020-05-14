import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RenownedMedicineApiService {

  constructor(private http: HttpClient) {}

  fetchAllData() {
    return this.http.get(`${environment.renownedMedicineApiDomain}/api/specialists`).pipe(
      map((d: any) => d.results),
      // simulate some latency
      delay(1500),
    );
  }
}
