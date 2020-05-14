import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store/root-store.module';
import { RenownedMedicineModule } from './containers/renowned-medicine/renowned-medicine.module';
import { MainNavigationModule } from './components/main-navigation/main-navigation.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RenownedMedicineModule,
    MainNavigationModule,
    RootStoreModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
