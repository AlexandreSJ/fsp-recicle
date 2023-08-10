import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-catador',
  templateUrl: './catador.component.html',
  styleUrls: ['./catador.component.scss'],
})
export class CatadorComponent implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  backHome() {
    this.modalController.dismiss();
  }
}
