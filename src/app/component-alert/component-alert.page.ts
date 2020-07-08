import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Button } from 'protractor';

@Component({
  selector: 'app-component-alert',
  templateUrl: './component-alert.page.html',
  styleUrls: ['./component-alert.page.scss'],
})
export class ComponentAlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async abrirAlertSimples(){
    let alertSimples = await this.alertCtrl.create(
      {
        header:'Alert',
        subHeader:'Sub Header',
        message:'alert simples',
        buttons:['ok']
      }
    );await alertSimples.present();
  }
  
    async abrirAlertMultiplo(){
      let alertSimples = await this.alertCtrl.create(
        {
          header:'Alert',
          subHeader:'Sub Header',
          message:'alert multiplo',
          buttons:['cancel','exclude']
        }
      );await alertSimples.present();
    }
    async abrirAlertConfirmacao(){
      let alertMultiple = await this.alertCtrl.create(
        {
          header:'Confirmação',
          message:'Deeseja cancelar o pedido <b>XPTO<b>',
          buttons:[
            {
              text:'Cancelar',
              role:'cancel',
              cssClass: 'secondary',
              handler:()=>{
                console.log('Pedido Cancelado: XPTO')
              }
          },
            {
              text:'Pagar',
              handler:()=>{
                console.log('Pago com sucesso')
              }
            },
            
          ]
        }
      );await alertMultiple.present();
    }
    async abrirPrompt(){
      let alert = await this.alertCtrl.create(
        {
          header:'Acesso Restrito',
          inputs:[
            {
              name: 'login',
              type: 'text',
              placeholder: 'informe se login'
            },
            {
              name: 'senha',
              type: 'password',
              placeholder: 'informe sua senha'
            }
          ],
          buttons: [
           {
             text:'Novo user',
             cssClass:'secondary',
             role: 'cancel',
             handler: ()=>{
               console.log('Aqui vai abrir a tela de cadastros de novos usuarios')
               this.abrirLogIn("Cadastre seu User")
             }
           },
           {
             text: 'Entrar',
             handler: (data)=>{
              
               console.log('Seja bem vindo', data)
               if(data['login'] == "matheussalles@hotmail.com" && data['senha'] == 1111 )
               {
                console.log('acesso permitido')
              
               }
               else{
                 console.log("acesso negado")
                 this.abrirLogIn("Algo está incorreto")
                 
               }
             }
           }
          ]
        }
      );await alert.present();
    }
    async abrirLogIn(logHeader:string){
      let logIn = await this.alertCtrl.create(
        {
          header:logHeader,
          inputs:[
            {
              name: 'login',
              type: 'text',
              placeholder: 'informe se login'
            },
            {
              name: 'senha',
              type: 'password',
              placeholder: 'informe sua senha'
            }
          ],
          buttons:[
            {
              text:"Entrar"
              
            },
            {
              text:"Cancelar",
              role:'cancel',
              cssClass:'secondary'
            }
          ]
        }
      );await logIn.present();
    }

}
