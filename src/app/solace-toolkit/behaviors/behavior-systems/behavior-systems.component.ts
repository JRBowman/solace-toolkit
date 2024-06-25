import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SolacetkSearchSheetComponent } from '../../common/solacetk-search-sheet/solacetk-search-sheet.component';
import { BehaviorState } from '../../models/behaviorstate';
import { BehaviorSystem, BehaviorType } from '../../models/behaviorsystem';
import { SoltkKeyValue } from '../../models/soltk-key-value';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'app-behavior-systems',
  templateUrl: './behavior-systems.component.html',
  styleUrls: ['./behavior-systems.component.css']
})
export class BehaviorSystemsComponent implements OnInit {


constructor(public service: SolacetkService, private _bottomSheet: MatBottomSheet) { }

public model: BehaviorSystem = new BehaviorSystem();
public modelChange = new EventEmitter<any>();
public moduleData: any = {};

  ngOnInit(): void {
    this.behaviorTypes = Object.keys(BehaviorType).filter(f => !isNaN(Number(f)));
    this.moduleData.moduleSeedData = window.origin + "/assets/test/behaviors/system_create.json"
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

  public RemoveState(behavior: BehaviorState): void {
    this.model.behaviors.splice(this.model.behaviors.indexOf(behavior), 1);
    //this.model.behaviors = [...this.model.behaviors];
    this.model.name = this.model.name;
    this.modelChange.emit(this.model);

    
    //this.model.nextStates = this.model.nextStates ? [...this.model.nextStates] : [];
  }

  dropBranches(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.model.behaviors, event.previousIndex, event.currentIndex);
  }

  public openActionsSheet()
  {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData('Events');

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

  public GenerateAtlas()
  {
    this.service.GetModelOp("Behaviors/Systems/" + this.model.id + "/atlas").subscribe((data) => {
      console.log(data);
    });
  }

}
