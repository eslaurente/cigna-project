import { Injectable } from '@angular/core';
import * as allData from './all-data.json';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RenownedMedicineApiService {

  constructor() {}

  fetchAllData() {
    return from(
        new Promise((resolve, reject) => {
        setTimeout(() => resolve(allData.results), 1500);
      })
    );
  }
}
