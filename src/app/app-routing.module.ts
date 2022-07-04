import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { ItemPageComponent } from './components/pages/item-page/item-page.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
 },
 {
  path: 'register',
  component: RegisterComponent
},
{
  path: '',
  redirectTo: 'login',
  pathMatch:'full'
},
{
  path: 'home',
  component: HomeComponent
},
{path:'search/:searchTerm', component:HomeComponent},
{path:'tag/:tag',component:HomeComponent},
{path:'item/:id',component:ItemPageComponent},
{path:'cart-page',component:CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
