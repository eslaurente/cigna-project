import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavigationComponent } from './main-navigation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    MainNavigationComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule
  ],
  exports: [
    MainNavigationComponent,
  ],
})
export class MainNavigationModule { }
