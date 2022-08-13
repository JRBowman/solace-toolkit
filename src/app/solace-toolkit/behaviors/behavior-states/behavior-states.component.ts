import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SolacetkSearchSheetComponent } from '../../common/solacetk-search-sheet/solacetk-search-sheet.component';
import { BehaviorAnimation } from '../../models/behavioranimation';
import { BehaviorState } from '../../models/behaviorstate';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'app-behavior-states',
  templateUrl: './behavior-states.component.html',
  styleUrls: ['./behavior-states.component.css']
})
export class BehaviorStatesComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  public model: BehaviorState = new BehaviorState();

  public animationFilter: string = "";
  public animations: BehaviorAnimation[] = new Array();

  ngOnInit(): void {

  }

  public openAnimationsSheet()
  {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData('Behaviors/animations');

    instance.instance.modelsSelected.subscribe((models) => 
    {
      this.model.animations = models;
    });
    
  }

  public openActionsSheet()
  {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData('Behaviors/actions');

    instance.instance.modelsSelected.subscribe((models) => 
    {
      this.model.action = models[0];
    });
    
  }

  dropAnims(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.model.animations, event.previousIndex, event.currentIndex);
  }

}
