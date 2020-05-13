import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenownedMedicineComponent } from './renowned-medicine.component';
import { SpecialistFinderHeaderModule } from '../../components/specialist-finder-header/specialist-finder-header.module';


@NgModule({
  declarations: [
    RenownedMedicineComponent,
  ],
  imports: [
    CommonModule,
    SpecialistFinderHeaderModule,
  ],
  exports: [
    RenownedMedicineComponent,
  ],
})
export class RenownedMedicineModule {
}
