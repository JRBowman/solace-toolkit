import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SolacetkSearchSheetComponent } from '../../common/solacetk-search-sheet/solacetk-search-sheet.component';
import { BehaviorComponent } from '../../models/behavioranimation';
import { CollisionDetectionType, MovableController, MovableControllerType } from '../../models/movablecontroller';

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

  ngOnInit(): void {
    this.movableTypes = Object.keys(this.moveType).filter(f => !isNaN(Number(f)));
    this.collidableTypes = Object.keys(this.collidableType).filter(f => !isNaN(Number(f)));
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
