import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SolacetkSearchSheetComponent } from '../../common/solacetk-search-sheet/solacetk-search-sheet.component';
import { BehaviorSystem } from '../../models/behaviorsystem';
import { MovableController, MovableControllerType, CollisionDetectionType } from '../../models/movablecontroller';
import { SolacetkService } from '../../services/solacetk-service.service';

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

  public behaviors: BehaviorSystem[] = [];

  public loadingBehaviors: boolean = true;

  constructor(private modelService: SolacetkService, private _bottomSheet: MatBottomSheet) { }

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

  public GetBehaviors(id: string): string {
    let behavior = this.behaviors.filter(x => x.id == id)[0].name;
    return behavior ?? "";
  }

  public Create() {
    this.model = new MovableController();
  }

  public openBehaviorsSheet()
  {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData('Behaviors/systems');

    instance.instance.modelsSelected.subscribe((models) => 
    {
      this.model.behaviorSystem = models[0];
    });
    
  }

}
