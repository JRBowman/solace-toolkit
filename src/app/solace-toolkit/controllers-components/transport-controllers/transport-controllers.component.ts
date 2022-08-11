import { Component, OnInit } from '@angular/core';
import { MovableController, CollisionDetectionType, MovableControllerType } from '../../models/movablecontroller';

@Component({
  selector: 'app-transport-controllers',
  templateUrl: './transport-controllers.component.html',
  styleUrls: ['./transport-controllers.component.css']
})
export class TransportControllersComponent implements OnInit {

  constructor() { }

  public model: MovableController = new MovableController();
  public worldLocation: string = "0,0,0";

  public collidableType = CollisionDetectionType;
  public collidableTypes: string[] = [];

  ngOnInit(): void {
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
