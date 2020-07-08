import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentRefreshPageRoutingModule } from './component-refresh-routing.module';

import { ComponentRefreshPage } from './component-refresh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentRefreshPageRoutingModule
  ],
  declarations: [ComponentRefreshPage]
})
export class ComponentRefreshPageModule {}
