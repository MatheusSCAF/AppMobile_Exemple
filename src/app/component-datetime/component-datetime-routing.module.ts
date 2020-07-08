import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentDatetimePage } from './component-datetime.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentDatetimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentDatetimePageRoutingModule {}
