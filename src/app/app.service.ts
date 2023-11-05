// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { setProducts } from './store/user.actions'; // Import your actions
import { Product } from './models/product.model'; // Import the Product model

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products?sort=desc';

  constructor(private http: HttpClient, private store: Store) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl); // Use the Product model as the data type
  }

  // ... Other service methods
}
