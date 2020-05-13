import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenownedMedicineComponent } from './renowned-medicine.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    RenownedMedicineComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    RenownedMedicineComponent,
  ]
})
export class RenownedMedicineModule { }
