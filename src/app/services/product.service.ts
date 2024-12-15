import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';
import { NonNullableFormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8088';

  constructor(private http: HttpClient) {

  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    if (categoryId === null || categoryId === undefined) {
      // Si categoryId est null, renvoyer tous les produits
      return this.getAllProducts();
    }
   

    return this.http.get<Product[]>(`${this.baseUrl}/getProductByIdCategory/${categoryId}`);
  }

  addProduct(product: any): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/addProduct`, product);
    

  }
}

