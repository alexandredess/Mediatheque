import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductDetailsComponent } from './pages/products-page/product-details/product-details.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',component : HomePageComponent},
  {path: 'products', component : ProductsPageComponent},
  {path: 'products/:type', component : ProductsPageComponent},
  {path:'products/:id',component:ProductDetailsComponent},
  {path: 'products/:type/:id', component:ProductDetailsComponent},
  {path:'**',component : NotFoundComponent}//doit être en dernier 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
