import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './app/about/about.component';
import { Beranda1Component } from './app/beranda1/beranda1.component';
import { Beranda2Component } from './app/beranda2/beranda2.component';
import { FooterComponent } from './app/footer/footer.component';
import { KategoriComponent } from './app/kategori/kategori.component';
import { AlphabetComponent } from './app/konten/alphabet/alphabet.component';
import { AngkaComponent } from './app/konten/angka/angka.component';
import { BendaComponent } from './app/konten/benda/benda.component';
import { HewanComponent } from './app/konten/hewan/hewan.component';
import { KataComponent } from './app/konten/kata/kata.component';
import { MewarnaiComponent } from './app/konten/mewarnai/mewarnai.component';
import { PerhitunganComponent } from './app/konten/perhitungan/perhitungan.component';
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
    path:'admin',
    loadChildren:()=>import('./app/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path:'beranda1',
    component:Beranda1Component
  },
  {
    path:'beranda2',
    component:Beranda2Component
  },
  {
    path:'alphabet',
    component:AlphabetComponent
  },
  {
    path:'angka',
    component:AngkaComponent
  },
  {
    path:'hewan',
    component:HewanComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'perhitungan',
    component:PerhitunganComponent
  },
  {
    path:'kata',
    component:KataComponent
  },
  {
    path:'benda',
    component:BendaComponent
  },
  {
    path:'mewarnai',
    component:MewarnaiComponent
  },
  {
    path:'about',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
