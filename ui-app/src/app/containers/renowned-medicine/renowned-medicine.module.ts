import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenownedMedicineComponent } from './renowned-medicine.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [
    RenownedMedicineComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    ComponentsModule
  ],
  exports: [
    RenownedMedicineComponent,
  ]
})
export class RenownedMedicineModule { }
