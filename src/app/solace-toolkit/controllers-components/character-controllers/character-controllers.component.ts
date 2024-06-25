import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SolacetkSearchSheetComponent } from '../../common/solacetk-search-sheet/solacetk-search-sheet.component';
import { BehaviorState } from '../../models/behaviorstate';
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

  public behavior?: BehaviorSystem;

  public profileUrl: string = "";

  public loadingBehaviors: boolean = true;

  public harnessVisible: boolean = false;
  public harnessEnabled: boolean = false;
  public behaviorLoaded: boolean = false;

  constructor(private modelService: SolacetkService, private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
    this.movableTypes = Object.keys(this.moveType).filter(f => !isNaN(Number(f)));
    this.collidableTypes = Object.keys(this.collidableType).filter(f => !isNaN(Number(f)));

    // Load Behavior:
    if (this.model.behaviorSystemId != undefined || this.model.behaviorSystemId != 0) {
      
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

  public GetBehaviors(id: number): string {
    let behavior = this.behaviors.filter(x => x.id == id)[0].name;
    return behavior ?? "";
  }



  public GetStates(): BehaviorState[] {

      let states: BehaviorState[] = [];

      // if (!this.model.behaviorSystem || !this.model.behaviorSystem.branches) return states;

      // this.model.behaviorSystem.branches.forEach(branch => {
      //     states = [...states, ...branch.GetStates()];
      // });

      return states;
  }

  public Create() {
    this.model = new MovableController();
  }

  public Load() {
    this.harnessVisible = true;

    // On Load - Obtain a Behavior if present:
    if (this.model.behaviorSystemId == 0) return;

    this.modelService.GetModelOp<BehaviorSystem>("Behaviors/systems/" + this.model.behaviorSystemId).subscribe((op) => {
      //if (op.resultCode != 200) return;
      this.behaviorLoaded = true;
      this.behavior = op.data;
    });
  }

  public Closed() {

    this.harnessVisible = false;
  }

  public openBehaviorsSheet()
  {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData('Behaviors/systems');

    instance.instance.modelsSelected.subscribe((models) => 
    {
      this.model.behaviorSystemId = models[0].id ?? 0;
    });
    
  }

  public GetPreviewUrl(model: any): string {
    model.previewUrl = this.modelService.apiHost + "Artifacts/" + model.name + "/" + model.name + ".gif";
    return model.previewUrl;
  }

}
