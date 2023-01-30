import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxAngularStorePageComponent } from './pages/rx-angular-store-page/rx-angular-store-page.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    RxAngularStorePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RxAngularStoreModule { }
