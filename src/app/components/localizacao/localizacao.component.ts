import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.scss'],
})
export class LocalizacaoComponent implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  backHome() {
    this.modalController.dismiss();
  }
}
