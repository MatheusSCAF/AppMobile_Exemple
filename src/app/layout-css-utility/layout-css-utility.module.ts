import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutCssUtilityPageRoutingModule } from './layout-css-utility-routing.module';

import { LayoutCssUtilityPage } from './layout-css-utility.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutCssUtilityPageRoutingModule
  ],
  declarations: [LayoutCssUtilityPage]
})
export class LayoutCssUtilityPageModule {}
