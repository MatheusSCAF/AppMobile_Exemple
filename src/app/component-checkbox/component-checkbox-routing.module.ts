import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentCheckboxPage } from './component-checkbox.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentCheckboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentCheckboxPageRoutingModule {}
