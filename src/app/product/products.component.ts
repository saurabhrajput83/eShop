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
  title:string = 'Products';
  showImage:boolean = false;
  products: IProduct[] = [];
  // class contructor
  constructor() {
  }
  // Onit.ngOnInit method definition
  ngOnInit() {
    this.products.push({id: 1, name: 'Product 1', modelNo: 'P01', price: 23.45, imageUrl: 'http://imshopping.rediff.com/imgshop/240-240/shopping/pixs/23639/2/213._gents-ultra-soft-polar-fleece-jacket-thermal-winter-wear-jersey---men-black.jpg'});
    this.products.push({id: 2, name: 'Product 2', modelNo: 'P02', price: 54.32, imageUrl: 'http://imshopping.rediff.com/imgshop/240-240/shopping/pixs/20933/_/_mg_1303._brown-boot-for-men--code---1632-brown-.jpg'});
  }
  // showImgClk - method/handler
  showImgClk() {
    this.showImage = !this.showImage;
  }
}
