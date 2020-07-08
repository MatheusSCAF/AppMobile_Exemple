import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentSlidePageRoutingModule } from './component-slide-routing.module';

import { ComponentSlidePage } from './component-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentSlidePageRoutingModule
  ],
  declarations: [ComponentSlidePage]
})
export class ComponentSlidePageModule {}
