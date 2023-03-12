import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SolacetkSearchSheetComponent } from '../../common/solacetk-search-sheet/solacetk-search-sheet.component';
import { BehaviorSystem, BehaviorType } from '../../models/behaviorsystem';
import { SoltkKeyValue } from '../../models/soltk-key-value';

@Component({
  selector: 'app-behavior-systems',
  templateUrl: './behavior-systems.component.html',
  styleUrls: ['./behavior-systems.component.css']
})
export class BehaviorSystemsComponent implements OnInit {


constructor(private _bottomSheet: MatBottomSheet) { }

public model: BehaviorSystem = new BehaviorSystem();

  ngOnInit(): void {
    this.behaviorTypes = Object.keys(BehaviorType).filter(f => !isNaN(Number(f)));
  }

  public behaviorTypes: any[] = [];
  public selectedBehavior: string = "";

  public behavior = BehaviorType;

  public operators: string[] = SoltkKeyValue.conditionalOperatorValues;

  public GetBehaviorType(item: string): string
  {
    this.selectedBehavior = BehaviorType[Number.parseInt(item)];
    return this.selectedBehavior;
  }

  dropBranches(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.model.behaviors, event.previousIndex, event.currentIndex);
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

  public openBranchesSheet(query: string = "")
  {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData('Behaviors/states', true, query);

    instance.instance.modelsSelected.subscribe((models) => 
    {
      this.model.behaviors = [...this.model.behaviors, ...models];

      // models.forEach(m => {
      //   if (this.model.behaviors.findIndex(x => x.id == m.id) == -1) this.model.behaviors.push(m);
      // });
    });
    
  }

}
