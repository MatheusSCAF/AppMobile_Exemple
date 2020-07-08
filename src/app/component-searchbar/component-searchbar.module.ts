import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentSearchbarPageRoutingModule } from './component-searchbar-routing.module';

import { ComponentSearchbarPage } from './component-searchbar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentSearchbarPageRoutingModule
  ],
  declarations: [ComponentSearchbarPage]
})
export class ComponentSearchbarPageModule {}
