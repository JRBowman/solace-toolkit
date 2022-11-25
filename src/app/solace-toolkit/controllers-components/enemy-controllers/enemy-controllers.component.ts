import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SolacetkSearchSheetComponent } from '../../common/solacetk-search-sheet/solacetk-search-sheet.component';
import { BehaviorComponent } from '../../models/behavioranimation';
import { BehaviorBranch } from '../../models/behaviorbranch';
import { BehaviorState } from '../../models/behaviorstate';
import { CollisionDetectionType, MovableController, MovableControllerType } from '../../models/movablecontroller';
import { SoltkKeyValue } from '../../models/soltk-key-value';

@Component({
  selector: 'app-enemy-controllers',
  templateUrl: './enemy-controllers.component.html',
  styleUrls: ['./enemy-controllers.component.css']
})
export class EnemyControllersComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  public model: MovableController = new MovableController();
  public worldLocation: string = "0,0,0";

  public selectedComponent: BehaviorComponent = new BehaviorComponent();


  moveType = MovableControllerType;
  public movableTypes: string[] = [];

  public collidableType = CollisionDetectionType;
  public collidableTypes: string[] = [];


  public testStateData: SoltkKeyValue[] = [];
  public testStateDataChange = new EventEmitter<SoltkKeyValue[]>();
  
  public testSelectedState?: BehaviorState;
  @Output() testSelectedStateChange = new EventEmitter<BehaviorState>();


  public selectedBranch?: BehaviorBranch;
  ngOnInit(): void {
    this.movableTypes = Object.keys(this.moveType).filter(f => !isNaN(Number(f)));
    this.collidableTypes = Object.keys(this.collidableType).filter(f => !isNaN(Number(f)));

    this.testStateDataChange.subscribe(value => {
      console.log(value);
    });
  }

  public selectState()
  {
    // If a State is Selected - wait till it's conditions no longer apply:
    if (this.testSelectedState && this.validateConditions(this.testSelectedState.conditions)) return; 

    // No State, find the first valid Branch:
    if (!(this.selectedBranch = this.model.behaviorSystem?.branches.find(x => this.validateConditions(x.conditions)))) return;
    console.log("Branch Found");

    if (!(this.testSelectedState = this.selectedBranch.states.find(x => this.validateConditions(x.conditions)))) return;
    console.log("State Found");

    // Notify of Changes:
    this.testSelectedStateChange.emit(this.testSelectedState);
  }

  private condResults: number = 0;
  public validateConditions(conditions: SoltkKeyValue[]): boolean
  {
    conditions.forEach(condition => {
      if (this.testStateData.findIndex(x => x.key == condition.key && x.data == condition.data) > -1) this.condResults++;
    });

    if (this.condResults != conditions.length) {
      this.condResults = 0;
      console.log("no result");
      return false;
    }
    else {
      this.condResults = 0;
      console.log("result found!");
      return true;
    }
    
  }

  public GetMoveType(val: string): string
  {
    return MovableControllerType[Number.parseInt(val)];
  }

  public GetCollisionType(val: string): string
  {
    return CollisionDetectionType[Number.parseInt(val)];
  }

  public importBehaviorSystem()
  {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData('Behaviors/systems');

    instance.instance.modelsSelected.subscribe((models) => 
    {
      this.model.behaviorSystem = models[0];
    });
  }

}
