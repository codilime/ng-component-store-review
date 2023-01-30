import {Component, OnInit} from '@angular/core';
import {RxState} from "@rx-angular/state";
import {EqualizerState} from "../../../shared/models/equalizer-state";
import {EqualizerInitState} from "../../../shared/models/equalizer-init-state";

@Component({
  selector: 'app-rx-angular-store-page',
  templateUrl: './rx-angular-store-page.component.html',
  styleUrls: ['./rx-angular-store-page.component.scss'],
  providers: [RxState]
})
export class RxAngularStorePageComponent implements OnInit {

  readonly state$ = this.state.select();
  readonly bass$ = this.state.select('bass');
  readonly middle$ = this.state.select('middle');
  readonly treble$ = this.state.select('treble');
  readonly boost$ = this.state.select('boost');

  constructor(private state: RxState<EqualizerState>) {
  }

  ngOnInit(): void {
    this.state.set(EqualizerInitState);
  }

  onBassChange = (bass: number) => this.state.set({bass});
  onMiddleChange = (middle: number) => this.state.set({middle});
  onTrebleChange = (treble: number) => this.state.set({treble});
  onBoostChange = (boost: boolean) => this.state.set({boost});

}
