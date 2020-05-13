import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RenownedMedicineComponent } from './containers/renowned-medicine/renowned-medicine.component';


const routes: Routes = [
  {
    path: '',
    component: RenownedMedicineComponent,
  },
  {
    path: 'renowned-medicine',
    component: RenownedMedicineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
