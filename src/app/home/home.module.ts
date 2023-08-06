import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CatadorComponent } from '../catador/catador.component';
import { RecicladorComponent } from '../reciclador/reciclador.component';
import { CentroReciclagemComponent } from '../centro-reciclagem/centro-reciclagem.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    CatadorComponent,
    RecicladorComponent,
    CentroReciclagemComponent,
  ],
})
export class HomePageModule {}
