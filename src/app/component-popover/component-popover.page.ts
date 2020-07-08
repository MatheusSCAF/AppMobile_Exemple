import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ComponentPopoverInternalComponent } from '../component-popover-internal/component-popover-internal.component';

@Component({
  selector: 'app-component-popover',
  templateUrl: './component-popover.page.html',
  styleUrls: ['./component-popover.page.scss'],
})
export class ComponentPopoverPage implements OnInit {

  constructor(private popoverCtrl : PopoverController) { }

  ngOnInit() {
  }
  async showPopover(event :any){
    const popover =  await this.popoverCtrl.create({
      component: ComponentPopoverInternalComponent,
      translucent : false,
      event: event
    });
    return await popover.present();
  }
  async showPopoverTranslucent(event :any){
    const popover =  await this.popoverCtrl.create({
      component: ComponentPopoverInternalComponent,
      translucent : true,
      event: event
    });
    return await popover.present();
  }
  async showPopoverAndroid(event :any){
    const popover =  await this.popoverCtrl.create({
      component: ComponentPopoverInternalComponent,
      translucent : true,
      event: event,
      mode:'md'
    });
    return await popover.present();
  }
  async showPopoverIos(event :any){
    const popover =  await this.popoverCtrl.create({
      component: ComponentPopoverInternalComponent,
      translucent : true,
      event: event,
      mode:"ios"
      
    });
    return await popover.present();
  }

}
