import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Beranda1Component } from './app/beranda1/beranda1.component';
import { Beranda2Component } from './app/beranda2/beranda2.component';
import { KategoriComponent } from './app/kategori/kategori.component';
import { MulaiComponent } from './app/mulai/mulai.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'mulai',
    pathMatch:'full'
  },
  {
    path:'kategori',
    component:KategoriComponent
  },
  {
    path:'mulai',
    component:MulaiComponent
  },
  {
    path:'beranda1',
    component:Beranda1Component
  },
  {
    path:'beranda2',
    component:Beranda2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
