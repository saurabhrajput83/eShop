// imports modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// imports components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './shared/header.component';
import {FooterComponent} from './shared/footer.component';
import {RatingComponent} from './shared/rating.component';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './product/products.component';
import {ProductDetailsComponent} from './product/productdetails.component';
// import services

// module decorator
@NgModule({
  // components declarations
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RatingComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent
  ],
  // modules declarations
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // services declarations
  providers: [],
  // startup component
  bootstrap: [AppComponent]
})
// App - module/class
export class AppModule { }
