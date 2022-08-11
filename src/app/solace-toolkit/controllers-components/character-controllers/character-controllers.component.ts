import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovableController, MovableControllerType, CollisionDetectionType } from '../../models/movablecontroller';

@Component({
  selector: 'app-character-controllers',
  templateUrl: './character-controllers.component.html',
  styleUrls: ['./character-controllers.component.css']
})
export class CharacterControllersComponent implements OnInit {

  @Input() model: MovableController = new MovableController();
  @Output() modelChange = new EventEmitter<MovableController>();

  public spriteStateUri!: string;
  public isTwoColumn = false;

  public worldLocation: string = "0,0,0";

  moveType = MovableControllerType;
  public movableTypes: string[] = [];

  public collidableType = CollisionDetectionType;
  public collidableTypes: string[] = [];

  constructor() { }



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

  public Create() {
    this.model = new MovableController();
  }

}
