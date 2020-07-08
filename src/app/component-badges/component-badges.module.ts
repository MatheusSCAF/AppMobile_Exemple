import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentBadgesPageRoutingModule } from './component-badges-routing.module';

import { ComponentBadgesPage } from './component-badges.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentBadgesPageRoutingModule
  ],
  declarations: [ComponentBadgesPage]
})
export class ComponentBadgesPageModule {}
