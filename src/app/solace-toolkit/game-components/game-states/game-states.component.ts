import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SolacetkSearchSheetComponent } from '../../common/solacetk-search-sheet/solacetk-search-sheet.component';
import { BehaviorSystem } from '../../models/behaviorsystem';

@Component({
  selector: 'app-game-states',
  templateUrl: './game-states.component.html',
  styleUrls: ['./game-states.component.css']
})
export class GameStatesComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  public model: BehaviorSystem = new BehaviorSystem();

  ngOnInit(): void {
  }

  dropBranches(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.model.behaviors, event.previousIndex, event.currentIndex);
  }

  public openBranchesSheet()
  {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData('Behaviors/states');

    instance.instance.modelsSelected.subscribe((models) => 
    {
      this.model.behaviors = models;
    });
    
  }

}
