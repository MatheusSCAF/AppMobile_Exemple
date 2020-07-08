import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputTestPageRoutingModule } from './input-test-routing.module';

import { InputTestPage } from './input-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputTestPageRoutingModule
  ],
  declarations: [InputTestPage]
})
export class InputTestPageModule {}
