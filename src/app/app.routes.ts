import { Routes } from '@angular/router';
import { HomeComponent } from './frontend/home/home.component';
import { ProductsComponent } from './frontend/products/products.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Redirects to home when the base URL is accessed
  { path: 'products', component: ProductsComponent } // Route for the ProductsComponent
];
