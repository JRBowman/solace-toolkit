import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SolacetkSearchSheetComponent } from '../../common/solacetk-search-sheet/solacetk-search-sheet.component';
import { ActionEvent } from '../../models/actionevent';
import { BehaviorAnimation } from '../../models/behavioranimation';
import { BehaviorState, StateType } from '../../models/behaviorstate';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'app-behavior-states',
  templateUrl: './behavior-noop-states.component.html',
  styleUrls: ['./behavior-states.component.css']
})
export class BehaviorNoopStatesComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet, public service: SolacetkService) { }

  public model: BehaviorState = new BehaviorState();

  public conditionsColor: string = "#006064";

  public unloadModules = new EventEmitter<boolean>();

  public showNextStates: boolean = false;

  public moduleData: any = {};

  public togglePreview: boolean = false;

  public doc: Document = document;

  ngOnInit(): void {
    this.model.noOp = true;
    this.model.endDelay = 0.0;
    this.model.startDelay = 0.0;
    this.model.type = StateType.Branch;
    this.moduleData.moduleSeedData = window.origin + "/assets/test/behaviors/branch_create.json";
  }

  public LogModel()
  {
    console.log(this.model);
  }

  public CreateModel(): void {
    this.model.noOp = true;
    this.model.endDelay = 0.0;
    this.model.startDelay = 0.0;
    this.model.stateType = "Branch";
    this.model.type = StateType.Branch;
  }

  public LoadModel(): void {
    this.model.noOp = true;
    this.model.type = StateType.Branch;
    // Exit if there are no selected States
    if (this.model.nextStates == null || this.model.nextStates.length == 0) return;

    // Load Full Next States If not Null:
    for (let index = 0; index < this.model.nextStates.length; index++) {
      const element = this.model.nextStates[index];
      if (element == null) this.model.nextStates[index] = new BehaviorState();
            // Call the Service:
            this.service.GetModelOp<BehaviorState>("Behaviors/states/" + element.id).subscribe(value => {
              if (this.model.nextStates == null) return;
              this.model.nextStates[index] = value.data ?? new BehaviorState();
              console.log(this.model.nextStates[index]);
              
            });
    }
    this.unloadModules.emit(false);
    this.showNextStates = true;
  }

  public CloseModel(): void {
    this.unloadModules.emit(true);
  }

  public RemoveState(behavior: BehaviorState): void {
    this.model.nextStates?.splice(this.model.nextStates.indexOf(behavior), 1);
    //this.model.nextStates = this.model.nextStates ? [...this.model.nextStates] : [];
  }

  public openAnimationsSheet(query: string = "")
  {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData('Behaviors/states', true, query);

    instance.instance.modelsSelected.subscribe((models) => 
    {
      if (this.model.nextStates == null) this.model.nextStates = [];
      models.forEach(m => {
        m.parentId = this.model.id;
      });
      this.model.nextStates = [...this.model.nextStates, ...models];
    });
    
  }

  public openEventsSheet() 
  {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData('Events');

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
    instance.instance.LoadData('Behaviors/states');

    instance.instance.modelsSelected.subscribe((models) => 
    {
      this.model.nextStates = models;
    });
  }

  dropAnims(event: CdkDragDrop<any[]>) {
    //moveItemInArray(this.model.animations, event.previousIndex, event.currentIndex);
  }

}
