// imports
import {Component,OnInit} from '@angular/core';
import {IProduct} from './product';
// component decorator
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
// Products - component/class
export class ProductsComponent implements OnInit {
  // variables
  title: string;
  showImage: boolean;
  products: IProduct[] = [];
  // component/class contructor
  constructor() {
    this.title = 'Products';
    this.showImage = false;
  }
  // OnInit.ngOnInit method definition
  ngOnInit() {
    this.products.push({id: 1, name: 'Product 1', modelNo: 'P01', price: 23.45, rating: 4, imageUrl: 'http://imshopping.rediff.com/imgshop/240-240/shopping/pixs/23639/2/213._gents-ultra-soft-polar-fleece-jacket-thermal-winter-wear-jersey---men-black.jpg'});
    this.products.push({id: 2, name: 'Product 2', modelNo: 'P02', price: 54.32, rating: 3, imageUrl: 'http://imshopping.rediff.com/imgshop/240-240/shopping/pixs/20933/_/_mg_1303._brown-boot-for-men--code---1632-brown-.jpg'});
  }
  // showImgClk - method/handler
  showImgClk(): void {
    this.showImage = !this.showImage;
  }
  // onRatingClick - method/handler
  onRatingClick(): void {
    console.log("onRatingClick");
  }
}
