// imports modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// imports components
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './product/products.component';
import {ProductDetailsComponent} from './product/productdetails.component';
// variables
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductDetailsComponent}
];
// module decorator
@NgModule({
  // modules declarations
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// AppRouting - module/class
export class AppRoutingModule { }
