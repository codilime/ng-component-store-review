import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxComponentStorePageComponent } from './pages/ngrx-component-store-page/ngrx-component-store-page.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    NgrxComponentStorePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NgrxComponentStoreModule { }
