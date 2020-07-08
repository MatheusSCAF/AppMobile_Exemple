import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentSlidePage } from './component-slide.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentSlidePageRoutingModule {}
