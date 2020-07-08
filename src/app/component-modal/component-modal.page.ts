import { ModalClassComponent } from './../modal-class/modal-class.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-component-modal',
  templateUrl: './component-modal.page.html',
  styleUrls: ['./component-modal.page.scss'],
})
export class ComponentModalPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }
  async openModal()
  {
    const modal = await this.modalCtrl.create({
      component: ModalClassComponent,
      componentProps:{nome :"Matheus", idade:16}


    });
     //Ao fechar o modal recupera o valor do modal fechado
   
    return await modal.present();
  }


}
