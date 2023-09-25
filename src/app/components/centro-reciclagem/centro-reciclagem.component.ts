import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocalizacaoComponent } from '../localizacao/localizacao.component';

@Component({
  selector: 'app-centro-reciclagem',
  templateUrl: './centro-reciclagem.component.html',
  styleUrls: ['./centro-reciclagem.component.scss'],
})
export class CentroReciclagemComponent  implements OnInit {
  modal!: HTMLIonModalElement;
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  async pullMap() {
    this.modal = await this.modalController.create({
      component: LocalizacaoComponent,
      // cssClass: 'custom-modal',
    });
    await this.modal.present();
  }

}
