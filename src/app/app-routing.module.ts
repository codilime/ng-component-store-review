import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RxAngularStorePageComponent} from "./rx-angular-store/pages/rx-angular-store-page/rx-angular-store-page.component";
import {NgrxComponentStorePageComponent} from "./ngrx-component-store/pages/ngrx-component-store-page/ngrx-component-store-page.component";

export enum PATH {
  RX_ANGULAR_STORE = 'rx-angular-store',
  NGRX_COMPONENT_STORE = 'ngrx-component-store'
}

const routes: Routes = [
  { path: '',   redirectTo: PATH.RX_ANGULAR_STORE, pathMatch: 'full' },
  {
    component: RxAngularStorePageComponent, path: PATH.RX_ANGULAR_STORE,
    loadChildren: () => import('../app/rx-angular-store/rx-angular-store.module').then(m => m.RxAngularStoreModule)
  },
  {
    component: NgrxComponentStorePageComponent, path: PATH.NGRX_COMPONENT_STORE,
    loadChildren: () => import('../app/ngrx-component-store/ngrx-component-store.module').then(m => m.NgrxComponentStoreModule)
  },
  {
    path: '**',
    component: RxAngularStorePageComponent,
    loadChildren: () => import('../app/rx-angular-store/rx-angular-store.module').then(m => m.RxAngularStoreModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
