import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentToastPage } from './component-toast.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentToastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentToastPageRoutingModule {}
