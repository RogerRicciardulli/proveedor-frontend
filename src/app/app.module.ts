import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCreationComponent } from './components/product-creation/product-creation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ProductModificationComponent } from './components/product-modification/product-modification.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ManageProductsComponent,
    ProductCreationComponent,
    ProductModificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
