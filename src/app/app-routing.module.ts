import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { ItemPageComponent } from './components/pages/item-page/item-page.component';

const routes: Routes = [
 {path:'',component:HomeComponent},
{path:'search/:searchTerm', component:HomeComponent},
{path:'tag/:tag',component:HomeComponent},
{path:'item/:id',component:ItemPageComponent},
{path:'cart-page',component:CartPageComponent},
{path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
