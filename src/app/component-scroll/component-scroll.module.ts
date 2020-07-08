import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentScrollPageRoutingModule } from './component-scroll-routing.module';

import { ComponentScrollPage } from './component-scroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentScrollPageRoutingModule
  ],
  declarations: [ComponentScrollPage]
})
export class ComponentScrollPageModule {}
