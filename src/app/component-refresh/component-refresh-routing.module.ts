import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentRefreshPage } from './component-refresh.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentRefreshPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRefreshPageRoutingModule {}
