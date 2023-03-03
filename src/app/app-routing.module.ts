import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CoursesComponent } from './courses/courses.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SingleProductComponent } from './single-product/single-product.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path: 'about',
    component: CoursesComponent,
  },
  {
    path:'products',
    component:ProductComponent,
  },
  {
    path:'single-product/:id',
    component:SingleProductComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },

  /*{
    path: 'products',
    children: [
      {
        path: 'view',
        component: ProductViewComponent,
      }
    ]
  },*/
  {
    path:'**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
