import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ItemPageComponent } from './components/pages/item-page/item-page.component';


const routes: Routes = [
 {path:'',component:LoginComponent},
{path:'search/:searchTerm', component:HomeComponent},
{path:'tag/:tag',component:HomeComponent},
{path:'item/:id',component:ItemPageComponent},
{path:'cart-page',component:CartPageComponent},
{path:'login',component:LoginComponent},
{path:'checkout',component:CheckoutPageComponent},
{path:'home',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
