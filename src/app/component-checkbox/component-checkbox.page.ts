import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-checkbox',
  templateUrl: './component-checkbox.page.html',
  styleUrls: ['./component-checkbox.page.scss'],
})
export class ComponentCheckboxPage implements OnInit {
  meses : any[] = [
    {nomeMes : 'Janeiro', valor : 1, checked:false},
    {nomeMes : 'Fevereiro', valor : 1, checked:true},
    {nomeMes : 'Março', valor : 1, checked:true},
    {nomeMes : 'Abril', valor : 1, checked:false},
    {nomeMes : 'Maio', valor : 1, checked:false},
  ];
  constructor() { }

  ngOnInit() {
    
  }
  exibirMeses(){
    console.table(this.meses);  }

}
