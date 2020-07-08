import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentPagePageRoutingModule } from './component-page-routing.module';

import { ComponentPagePage } from './component-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentPagePageRoutingModule
  ],
  declarations: [ComponentPagePage]
})
export class ComponentPagePageModule {}
