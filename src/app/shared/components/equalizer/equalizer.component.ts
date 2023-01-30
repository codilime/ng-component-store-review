import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-equalizer',
  templateUrl: './equalizer.component.html',
  styleUrls: ['./equalizer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EqualizerComponent implements OnChanges {

  @Input() bass: number | null = 0;
  @Input() middle: number | null = 0;
  @Input() treble: number | null = 0;
  @Input() boost: boolean | null = false;

  @Output() bassChange = new EventEmitter<number>();
  @Output() middleChange = new EventEmitter<number>();
  @Output() trebleChange = new EventEmitter<number>();
  @Output() boostChange = new EventEmitter<boolean>();

  setBass = (value: number | null) => this.bassChange.emit(value ? value : 0);
  setMiddle = (value: number | null) => this.middleChange.emit(value ? value : 0);
  setTreble = (value: number | null) => this.trebleChange.emit(value ? value : 0);
  setBoost = (value: MatSlideToggleChange) => this.boostChange.emit(value.checked);

  ngOnChanges(changes: SimpleChanges) {
    console.log('EqualizerComponent -> ngOnChanges: ', changes)
  }
}
