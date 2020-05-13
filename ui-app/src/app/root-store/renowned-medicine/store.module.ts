import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { RenownedMedicineEffectEffects } from './effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer';
import { featureName } from './state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([RenownedMedicineEffectEffects])
  ]
})
export class RenownedMedicineStoreModule { }
