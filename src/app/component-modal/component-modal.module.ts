import { ModalClassComponent } from './../modal-class/modal-class.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentModalPageRoutingModule } from './component-modal-routing.module';

import { ComponentModalPage } from './component-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModalPageRoutingModule
  ],
  declarations: [ComponentModalPage,ModalClassComponent],
  entryComponents:[ModalClassComponent]
})
export class ComponentModalPageModule {}
