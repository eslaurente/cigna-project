import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterFormComponent } from './filter-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [FilterFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
  ],
  exports: [
    FilterFormComponent,
  ],
})
export class FilterFormModule {
}
