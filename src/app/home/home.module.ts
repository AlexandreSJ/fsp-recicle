import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CatadorComponent } from '../components/catador/catador.component';
import { RecicladorComponent } from '../components/reciclador/reciclador.component';
import { CentroReciclagemComponent } from '../components/centro-reciclagem/centro-reciclagem.component';
import { LocalizacaoComponent } from '../components/localizacao/localizacao.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    CatadorComponent,
    RecicladorComponent,
    CentroReciclagemComponent,
    LocalizacaoComponent,
  ],
})
export class HomePageModule {}
