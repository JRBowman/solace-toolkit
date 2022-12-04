import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SolacetkSearchSheetComponent } from '../../common/solacetk-search-sheet/solacetk-search-sheet.component';
import { ActionEvent } from '../../models/actionevent';
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

  public conditionsColor: string = "#006064";

  ngOnInit(): void {

  }

  public LogModel()
  {
    console.log(this.model);
  }

  public openAnimationsSheet()
  {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData('Behaviors/animations');

    instance.instance.modelsSelected.subscribe((models) => 
    {
      this.model.animation = models[0];
    });
    
  }

  public openEventsSheet() 
  {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData('Behaviors/events');

    instance.instance.modelsSelected.subscribe((models) => 
    {
      this.model.events = [...this.model.events, ...models];
    });
  }

  public openActionsSheet()
  {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData('Behaviors/actions');

    instance.instance.modelsSelected.subscribe((models) => 
    {
      this.model.events = models;
    });
    
  }

  public openConditionsSheet()
  {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData('Behaviors/conditions');

    instance.instance.modelsSelected.subscribe((models) => 
    {
      this.model.conditions = models;
    });
    
  }

  public openNextStateSheet(): void {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData('Behaviors/states', false);

    instance.instance.modelsSelected.subscribe((models) => 
    {
      this.model.next = models[0];
    });
  }

  dropAnims(event: CdkDragDrop<any[]>) {
    //moveItemInArray(this.model.animations, event.previousIndex, event.currentIndex);
  }

}
