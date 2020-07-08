import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
})
export class ComponentsPage implements OnInit {
  
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  abrirPagina(nomePagina:string)
  {
    this.navCtrl.navigateForward(nomePagina);
  }

}
