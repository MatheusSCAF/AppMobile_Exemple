import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentScrollPage } from './component-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentScrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentScrollPageRoutingModule {}
