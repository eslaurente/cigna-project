import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialistFinderHeaderComponent } from './specialist-finder-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';


@NgModule({
declarations: [
    SpecialistFinderHeaderComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatCardModule,
  ],
  exports: [
    SpecialistFinderHeaderComponent
  ],
})
export class SpecialistFinderHeaderModule { }
