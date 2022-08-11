import { Component, OnInit } from '@angular/core';
import { CollisionDetectionType, MovableController, MovableControllerType } from '../../models/movablecontroller';

@Component({
  selector: 'app-enemy-controllers',
  templateUrl: './enemy-controllers.component.html',
  styleUrls: ['./enemy-controllers.component.css']
})
export class EnemyControllersComponent implements OnInit {

  constructor() { }

  public model: MovableController = new MovableController();
  public worldLocation: string = "0,0,0";

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

}
