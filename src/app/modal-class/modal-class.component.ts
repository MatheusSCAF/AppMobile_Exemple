import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController, ModalController } from '@ionic/angular';
// import {ViewController} from '../../../node_modules/@ionic/core';

@Component({
  selector: 'app-modal-class',
  templateUrl: './modal-class.component.html',
  styleUrls: ['./modal-class.component.scss'],
})
export class ModalClassComponent implements OnInit {

  constructor(private navParam : NavParams, private alertCtrl : AlertController, private modalCtrl:ModalController) { }

  async ngOnInit() {
    const  idade= this.navParam.get("idade");
    const  nome= this.navParam.get("nome");
    
   let alert =  await this.alertCtrl.create({
      header: "Welcome",
      message:"Seja Bem Vindo "+ nome+" nós temos varias promoções para que possuir  "+idade+" anos"
    });
    return await alert.present();
  }
  async closeModal()
  {
    const response = {nome:"Fernanda", idade:28};
    this.modalCtrl.dismiss(response);
  }

}
