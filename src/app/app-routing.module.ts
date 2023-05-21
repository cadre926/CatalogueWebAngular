import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitsComponent } from './produits/produits.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';


const routes=[
{path:"products/:urlProds",component:ProduitsComponent},
{path:"login",component:LoginComponent},
{path:"adminCategories",component:AdminCategoriesComponent},
{path:"adminProducts",component:AdminProductsComponent},
{path:"adminUsers",component:AdminUsersComponent}

]
@NgModule({
  declarations: [], 
  imports: [

   [RouterModule.forRoot(routes)],
    CommonModule
  ]
})
export class AppRoutingModule { }
