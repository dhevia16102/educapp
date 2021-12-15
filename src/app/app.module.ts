import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KategoriComponent } from './app/kategori/kategori.component';
import { MaterialDesign } from './material/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MulaiComponent } from './app/mulai/mulai.component';
import { Beranda1Component } from './app/beranda1/beranda1.component';
import { Beranda2Component } from './app/beranda2/beranda2.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    KategoriComponent,
    MulaiComponent,
    Beranda1Component,
    Beranda2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialDesign,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
