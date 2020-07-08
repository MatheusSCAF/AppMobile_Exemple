import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentToastPageRoutingModule } from './component-toast-routing.module';

import { ComponentToastPage } from './component-toast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentToastPageRoutingModule
  ],
  declarations: [ComponentToastPage]
})
export class ComponentToastPageModule {}
