import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentPagePage } from './component-page.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentPagePageRoutingModule {}
