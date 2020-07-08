import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentDatetimePageRoutingModule } from './component-datetime-routing.module';

import { ComponentDatetimePage } from './component-datetime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentDatetimePageRoutingModule
  ],
  declarations: [ComponentDatetimePage]
})
export class ComponentDatetimePageModule {}
