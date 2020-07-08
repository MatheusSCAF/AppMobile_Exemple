import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputTestPage } from './input-test.page';

const routes: Routes = [
  {
    path: '',
    component: InputTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputTestPageRoutingModule {}
