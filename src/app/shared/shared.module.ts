import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {EqualizerComponent} from "./components/equalizer/equalizer.component";
import {MatTabsModule} from "@angular/material/tabs";
import {RouterModule} from "@angular/router";
import {MatSliderModule} from "@angular/material/slider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";


@NgModule({
  declarations: [
    NavbarComponent,
    EqualizerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  exports: [
    NavbarComponent,
    EqualizerComponent
  ],
})
export class SharedModule { }
