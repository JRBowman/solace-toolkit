import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SolacetkSearchSheetComponent } from '../../common/solacetk-search-sheet/solacetk-search-sheet.component';
import { BehaviorBranch } from '../../models/behaviorbranch';
import { BehaviorState } from '../../models/behaviorstate';

@Component({
  selector: 'app-behavior-branches',
  templateUrl: './behavior-branches.component.html',
  styleUrls: ['./behavior-branches.component.css']
})
export class BehaviorBranchesComponent implements OnInit {
  

  constructor(private _bottomSheet: MatBottomSheet) { }

  public model: BehaviorBranch = new BehaviorBranch();

  ngOnInit(): void {
  }

  dropBranches(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.model.states, event.previousIndex, event.currentIndex);
  }

  public openBranchesSheet()
  {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData('Behaviors/states');

    instance.instance.modelsSelected.subscribe((models) => 
    {
      this.model.states = models;
    });
    
  }

}
