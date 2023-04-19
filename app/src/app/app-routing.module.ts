import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'footer', component: FooterComponent },
  { path: 'cart', component: CartComponent },
  { path: '', component: HomepageComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'nav', component: NavbarComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
