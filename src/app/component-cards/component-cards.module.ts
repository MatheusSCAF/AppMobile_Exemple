import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentCardsPageRoutingModule } from './component-cards-routing.module';

import { ComponentCardsPage } from './component-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentCardsPageRoutingModule
  ],
  declarations: [ComponentCardsPage]
})
export class ComponentCardsPageModule {}
