import { Component, OnInit } from '@angular/core';
import {ComponentStore} from "@ngrx/component-store";
import {EqualizerState} from "../../../shared/models/equalizer-state";
import {EqualizerInitState} from "../../../shared/models/equalizer-init-state";
import {map} from "rxjs";

@Component({
  selector: 'app-ngrx-component-store-page',
  templateUrl: './ngrx-component-store-page.component.html',
  styleUrls: ['./ngrx-component-store-page.component.scss'],
  providers: [ComponentStore]
})
export class NgrxComponentStorePageComponent implements OnInit {

  readonly state$ = this.componentStore.state$;
  readonly bass$ = this.componentStore.state$.pipe(map(state => state.bass));
  readonly middle$ = this.componentStore.state$.pipe(map(state => state.middle));
  readonly treble$ = this.componentStore.state$.pipe(map(state => state.treble));
  readonly boost$ = this.componentStore.state$.pipe(map(state => state.boost));

  constructor(private readonly componentStore: ComponentStore<EqualizerState>) { }

  ngOnInit(): void {
    this.componentStore.setState(EqualizerInitState)
  }

  onBassChange = (bass: number) => this.componentStore.patchState({bass});
  onMiddleChange = (middle: number) => this.componentStore.patchState({middle});
  onTrebleChange = (treble: number) => this.componentStore.patchState({treble});
  onBoostChange = (boost: boolean) => this.componentStore.patchState({boost});

}
