import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { ProductCreationComponent } from './components/product-creation/product-creation.component';
import { ProductModificationComponent } from './components/product-modification/product-modification.component';


const routes: Routes = [
  {path: 'products', component: ManageProductsComponent},
  {path: 'product/creation', component: ProductCreationComponent},
  {path: 'product/edit/:productId', component: ProductModificationComponent},
  {path: '**', redirectTo: '/products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
