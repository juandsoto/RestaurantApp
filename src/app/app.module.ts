import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenuComponent} from './menu/menu.component';
import {ProductComponent} from './shared/product/product.component';
import {HomeComponent} from './home/home.component';
import {CardComponent} from './shared/card/card.component';
import {AboutComponent} from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    HomeComponent,
    CardComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
