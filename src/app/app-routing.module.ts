import { ModalClassComponent } from './modal-class/modal-class.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'instalacao',
    loadChildren: () => import('./instalacao/instalacao.module').then( m => m.InstalacaoPageModule)
  },
  {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then( m => m.LayoutPageModule)
  },
  {
    path: 'layout-header-footer',
    loadChildren: () => import('./layout-header-footer/layout-header-footer.module').then( m => m.LayoutHeaderFooterPageModule)
  },
  {
    path: 'layout-tabs',
    loadChildren: () => import('./layout-tabs/layout-tabs.module').then( m => m.LayoutTabsPageModule)
  },
  {
    path: 'layout-menu',
    loadChildren: () => import('./layout-menu/layout-menu.module').then( m => m.LayoutMenuPageModule)
  },
  {
    path: 'layout-split-pane',
    loadChildren: () => import('./layout-split-pane/layout-split-pane.module').then( m => m.LayoutSplitPanePageModule)
  },
  {
    path: 'layout-grid',
    loadChildren: () => import('./layout-grid/layout-grid.module').then( m => m.LayoutGridPageModule)
  },
  {
    path: 'layout-css-utility',
    loadChildren: () => import('./layout-css-utility/layout-css-utility.module').then( m => m.LayoutCssUtilityPageModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./components/components.module').then( m => m.ComponentsPageModule)
  },
  {
    path: 'component-action-sheet',
    loadChildren: () => import('./component-action-sheet/component-action-sheet.module').then( m => m.ComponentActionSheetPageModule)
  },
  {
    path: 'component-alert',
    loadChildren: () => import('./component-alert/component-alert.module').then( m => m.ComponentAlertPageModule)
  },
  {
    path: 'component-badges',
    loadChildren: () => import('./component-badges/component-badges.module').then( m => m.ComponentBadgesPageModule)
  },
  {
    path: 'component-button',
    loadChildren: () => import('./component-button/component-button.module').then( m => m.ComponentButtonPageModule)
  },
  {
    path: 'component-cards',
    loadChildren: () => import('./component-cards/component-cards.module').then( m => m.ComponentCardsPageModule)
  },
  {
    path: 'component-checkbox',
    loadChildren: () => import('./component-checkbox/component-checkbox.module').then( m => m.ComponentCheckboxPageModule)
  },
  {
    path: 'component-radio',
    loadChildren: () => import('./component-radio/component-radio.module').then( m => m.ComponentRadioPageModule)
  },
  {
    path: 'component-datetime',
    loadChildren: () => import('./component-datetime/component-datetime.module').then( m => m.ComponentDatetimePageModule)
  },
  {
    path: 'component-fab',
    loadChildren: () => import('./component-fab/component-fab.module').then( m => m.ComponentFabPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'component-input',
    loadChildren: () => import('./component-input/component-input.module').then( m => m.ComponentInputPageModule)
  },
  {
    path: 'input-test',
    loadChildren: () => import('./input-test/input-test.module').then( m => m.InputTestPageModule)
  },
  {
    path: 'component-list',
    loadChildren: () => import('./component-list/component-list.module').then( m => m.ComponentListPageModule)
  },
  {
    path: 'component-loading',
    loadChildren: () => import('./component-loading/component-loading.module').then( m => m.ComponentLoadingPageModule)
  },
  {
    path: 'component-modal',
    loadChildren: () => import('./component-modal/component-modal.module').then( m => m.ComponentModalPageModule)
  },
  {
    path: 'component-page',
    loadChildren: () => import('./component-page/component-page.module').then( m => m.ComponentPagePageModule)
  },
  {
    path: 'component-select',
    loadChildren: () => import('./component-select/component-select.module').then( m => m.ComponentSelectPageModule)
  },
  {
    path: 'component-slide',
    loadChildren: () => import('./component-slide/component-slide.module').then( m => m.ComponentSlidePageModule)
  },
  {
    path: 'component-toast',
    loadChildren: () => import('./component-toast/component-toast.module').then( m => m.ComponentToastPageModule)
  },
  {
    path: 'component-scroll',
    loadChildren: () => import('./component-scroll/component-scroll.module').then( m => m.ComponentScrollPageModule)
  },
  {
    path: 'component-popover',
    loadChildren: () => import('./component-popover/component-popover.module').then( m => m.ComponentPopoverPageModule)
  },
  {
    path: 'component-refresh',
    loadChildren: () => import('./component-refresh/component-refresh.module').then( m => m.ComponentRefreshPageModule)
  },
  {
    path: 'component-searchbar',
    loadChildren: () => import('./component-searchbar/component-searchbar.module').then( m => m.ComponentSearchbarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule,]
})
export class AppRoutingModule {}
