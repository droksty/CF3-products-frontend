import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ProductAPIList } from './product.interfaces';

const PRODUCT_API = 'https://codingfactory.ddns.net/api/product'

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<ProductAPIList>(`${PRODUCT_API}/findall`);
  }

  insertProduct(product: Product) {
    return this.http.post<ProductAPIList>(`${PRODUCT_API}/create`, product);
  }
}
