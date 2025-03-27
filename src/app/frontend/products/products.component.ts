import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

interface Product {
  name: string;
  salt_description: string;
  description: string;
  bynow_link: string;
  images: string[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NavBarComponent],  // Add HttpClientModule here
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  private http = inject(HttpClient);  // Use Angular's inject() for HttpClient

  ngOnInit() {
    this.http.get<Product[]>('assets/products.json').subscribe((data) => {
      this.products = data;
    });
  }
}
