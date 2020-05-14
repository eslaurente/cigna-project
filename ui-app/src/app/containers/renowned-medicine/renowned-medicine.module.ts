import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenownedMedicineComponent } from './renowned-medicine.component';
import { SpecialistFinderHeaderModule } from '../../components/specialist-finder-header/specialist-finder-header.module';
import { FilterFormModule } from '../../components/filter-form/filter-form.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpecialistItemModule } from '../../components/specialist-item/specialist-item.module';


@NgModule({
  declarations: [
    RenownedMedicineComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SpecialistFinderHeaderModule,
    FilterFormModule,
    FlexLayoutModule,
    SpecialistItemModule,
  ],
  exports: [
    RenownedMedicineComponent,
  ],
})
export class RenownedMedicineModule {
}
