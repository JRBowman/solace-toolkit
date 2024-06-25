import { Component, Inject, OnInit } from '@angular/core';
import { MatChipListboxChange } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorAnimationFrame } from '../../models/behavior-animation-frame';
import { BehaviorAnimationData } from '../../models/behavioranimation';

@Component({
  selector: 'app-solacetk-animation-dialog',
  templateUrl: './solacetk-animation-dialog.component.html',
  styleUrls: ['./solacetk-animation-dialog.component.css']
})
export class SolacetkAnimationDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SolacetkAnimationDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  public duration: number = 100;
  public width: number = 48;
  public height: number = 48;

  public model?: BehaviorAnimationData;

  public selectedFrames: number[] = [];

  ngOnInit(): void {
    this.model = this.data;
  }

  public applyData(): void {
    this.model?.frames.filter(f => this.selectedFrames.includes(f.order)).forEach((frame) => {
      if (this.duration > 0) frame.duration = this.duration;
      frame.width = this.width;
      frame.height = this.height;
    });

    this.dialogRef.close();
  }

  public framesChanged(event: MatChipListboxChange): void {
    this.selectedFrames = event.value;
  }

}
