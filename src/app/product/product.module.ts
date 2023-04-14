import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductService } from './product.service';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductInsertComponent } from './product-insert/product-insert.component';


const routes: Routes = [
  { path: 'list', component: ProductsListComponent },
  { path: 'insert', component: ProductInsertComponent}
];

@NgModule({
  declarations: [ProductsListComponent, ProductInsertComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule, ReactiveFormsModule],
  providers: [ProductService]
})
export class ProductModule { }
