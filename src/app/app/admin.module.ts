import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin/admin.component";
import { RouterModule, Routes } from "@angular/router";
import { AlphabetComponent } from "./konten/alphabet/alphabet.component";
import { AngkaComponent } from "./konten/angka/angka.component";
import { BendaComponent } from "./konten/benda/benda.component";
import { HewanComponent } from "./konten/hewan/hewan.component";
import { KataComponent } from "./konten/kata/kata.component";
import { MewarnaiComponent } from "./konten/mewarnai/mewarnai.component";
import { PerhitunganComponent } from "./konten/perhitungan/perhitungan.component";
import { MaterialDesign } from "../material/material";
import { FormsModule } from "@angular/forms";
import { FooterComponent } from './footer/footer.component';


const routes: Routes=[
    {
        path:'',
        component:AdminComponent,
        children:[
            {
                path:'alphabet',
                component:AlphabetComponent
            },
            {
                path:'angka',
                component:AngkaComponent
            },
            {
                path:'benda',
                component:BendaComponent
            },
            {
                path:'hewan',
                component:HewanComponent
            },
            {
                path:'kata',
                component:KataComponent
            },
            {
                path:'mewarnai',
                component:MewarnaiComponent
            },
            {
                path:'perhitungan',
                component:PerhitunganComponent
            }
        ]
    }
]
@NgModule({
    declarations: [
        AdminComponent,
        AlphabetComponent,
        AngkaComponent,
        BendaComponent,
        HewanComponent,
        KataComponent,
        MewarnaiComponent,
        PerhitunganComponent,
        FooterComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        MaterialDesign,
        FormsModule
        
    ]
})
export class AdminModule{}