import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-searchbar',
  templateUrl: './component-searchbar.page.html',
  styleUrls: ['./component-searchbar.page.scss'],
})
export class ComponentSearchbarPage implements OnInit {
nome : string = "";
human: any;
humans:any;
  constructor() { 
    this.human =[
      {id :1, idade: 16, nome:"Matheus"},
      {id :2, idade: 25, nome:"Rafael"},
      {id :3, idade: 45, nome:"Marcos"},
      {id :4, idade: 32, nome:"Julio"},
      {id :7, idade: 17, nome:"Roberta"},
      {id :7, idade: 50, nome:"Milena"},
      {id :8, idade: 36, nome:"Giovana"},
      
    ];
    this.humans = this.human;
  }

  ngOnInit() {
  }
  filtrarItens(){
    this.humans = this.filtrarPessoas(this.nome)
  }
  filtrarPessoas(nome){
    this.humans = this.human;
    return this.humans.filter((item)=>{
      return item.nome.toLowerCase().includes(nome.toLowerCase());
    });
  }


}
 