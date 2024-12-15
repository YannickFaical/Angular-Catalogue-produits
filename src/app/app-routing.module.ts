import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AfficherContactComponent } from './afficher-contact/afficher-contact.component';
//import { AjoutContactComponent } from './ajout-contact/ajout-contact.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';


const routes: Routes = [
    //{path:"afficher",component:AfficherContactComponent},
   // {path:"ajouter",component:AjoutContactComponent},
    {path:"listeProduit",component:ProductListComponent},
    {path:"ajouterProduit",component:AddProductComponent},

    {path:"",redirectTo:'AppComponent',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
