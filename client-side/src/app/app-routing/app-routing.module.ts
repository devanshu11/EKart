import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component'
import { RegisterComponent } from '../register/register.component'
import { HomePageComponent } from '../home-page/home-page.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { SellerProfileComponent} from '../seller-profile/seller-profile.component';
import { CustomerProfileComponent} from '../customer-profile/customer-profile.component';
import { AllProductsComponent } from '../all-products/all-products.component'
import { AddProductComponent } from '../add-product/add-product.component';
import { SellerChangeProductComponent } from '../seller-change-product/seller-change-product.component'


const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'sellerProfile', component: SellerProfileComponent},
  { path: 'customerProfile', component: CustomerProfileComponent},
  { path: 'viewAllProducts', component: AllProductsComponent},
  { path: 'sellerProfile/newProduct', component: AddProductComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'modifyProduct/:id', component: SellerChangeProductComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }