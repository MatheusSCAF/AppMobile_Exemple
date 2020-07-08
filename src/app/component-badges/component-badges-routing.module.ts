import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentBadgesPage } from './component-badges.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentBadgesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentBadgesPageRoutingModule {}
