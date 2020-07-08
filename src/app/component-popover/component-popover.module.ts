import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentPopoverPageRoutingModule } from './component-popover-routing.module';

import { ComponentPopoverPage } from './component-popover.page';
import { ComponentPopoverInternalComponent } from '../component-popover-internal/component-popover-internal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentPopoverPageRoutingModule
  ],
  declarations: [ComponentPopoverPage,ComponentPopoverInternalComponent],
  entryComponents:[ComponentPopoverInternalComponent]
})
export class ComponentPopoverPageModule {}
