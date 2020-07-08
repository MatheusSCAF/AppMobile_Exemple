import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentCheckboxPageRoutingModule } from './component-checkbox-routing.module';

import { ComponentCheckboxPage } from './component-checkbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentCheckboxPageRoutingModule
  ],
  declarations: [ComponentCheckboxPage]
})
export class ComponentCheckboxPageModule {}
