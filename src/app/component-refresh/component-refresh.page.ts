import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-refresh',
  templateUrl: './component-refresh.page.html',
  styleUrls: ['./component-refresh.page.scss'],
})
export class ComponentRefreshPage implements OnInit {

  message : string ="pull down for more informations"
  constructor() { }

  ngOnInit() {
  }
  atualizarMensagem(event : any)
  {
    setTimeout(()=> {
      this.message = "Updated";
      event.target.complete();
    },2000)
  }

}
