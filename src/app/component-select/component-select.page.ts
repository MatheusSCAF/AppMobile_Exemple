import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-select',
  templateUrl: './component-select.page.html',
  styleUrls: ['./component-select.page.scss'],
})
export class ComponentSelectPage implements OnInit {

  customAlertOptions: any = {
    header: "Pizza Toppings",
    subHeader: "Select your toppings",
    message: "1.00 per topping" ,
    translucent : true
   };
   customPopoverOptions: any = {
    header: "Pizza Toppings",
    subHeader: "Select your toppings",
    message: "1.00 per topping" ,
   };
   customActionSheetOptions: any = {
    header: "Pizza Toppings",
    subHeader: "Select your toppings",
   };
  constructor() { }

  ngOnInit() {
  }

}
