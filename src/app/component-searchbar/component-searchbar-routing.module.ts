import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentSearchbarPage } from './component-searchbar.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentSearchbarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentSearchbarPageRoutingModule {}
