import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutCssUtilityPage } from './layout-css-utility.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutCssUtilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutCssUtilityPageRoutingModule {}
