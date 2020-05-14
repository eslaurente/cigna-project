import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenownedMedicineComponent } from './renowned-medicine.component';
import { SpecialistFinderHeaderModule } from '../../components/specialist-finder-header/specialist-finder-header.module';
import { FilterFormModule } from '../../components/filter-form/filter-form.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    RenownedMedicineComponent,
  ],
  imports: [
    CommonModule,
    NoopAnimationsModule,
    SpecialistFinderHeaderModule,
    FilterFormModule,
    FlexLayoutModule,
  ],
  exports: [
    RenownedMedicineComponent,
  ],
})
export class RenownedMedicineModule {
}
