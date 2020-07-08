import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-component-toast',
  templateUrl: './component-toast.page.html',
  styleUrls: ['./component-toast.page.scss'],
})
export class ComponentToastPage implements OnInit {

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }
  async showToast()
  {
    const toast = await this.toastCtrl.create({
      message : "Sent by toast",
      duration: 2000
    });
    toast.present();
  }
  async showToastPosition(position:string)
  {
    const toast = await this.toastCtrl.create({
      message : "Sent by toast",
      duration: 2000,
      //position:position
      
    });
    toast.present();
  }
  async showToastButton()
  {
    const toast = await this.toastCtrl.create({
      message : "Sent by toast",
    
      duration: 2000,
      buttons: [
        // {
        //   side: 'start',
        //   icon: 'star',
        //   text: 'Favorite',
        //   handler: () => {
        //     console.log('Favorite clicked');
        //   }
        // }, 
        {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
      
      
    });
    toast.present();
  }

}

