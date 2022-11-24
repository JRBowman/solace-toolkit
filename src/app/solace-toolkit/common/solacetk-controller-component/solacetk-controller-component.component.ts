import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorComponent } from '../../models/behavioranimation';
import { SoltkKeyValue } from '../../models/soltk-key-value';

@Component({
  selector: 'solacetk-controller-component',
  templateUrl: './solacetk-controller-component.component.html',
  styleUrls: ['./solacetk-controller-component.component.css']
})
export class SolacetkControllerComponentComponent implements OnInit {

  constructor() { }

  @Input() model: BehaviorComponent[] = [];
  @Output() modelChange: EventEmitter<BehaviorComponent[]> = new EventEmitter<BehaviorComponent[]>();

  @Input() selectedComponent?: BehaviorComponent;
  @Output() selectedComponentChange: EventEmitter<BehaviorComponent> = new EventEmitter<BehaviorComponent>();

  @Input() panelType: string = "expansionpanel";

  @Input() panelColor: string = "darkgrey";

  public componentTypes?: string[] = BehaviorComponent.componentTypes;

  @Input() getStateData: EventEmitter<SoltkKeyValue[]> = new EventEmitter<SoltkKeyValue[]>();

  ngOnInit(): void {
  }

  public addComponent()
  {
    if (!this.model) this.model = [];
    this.model = [...this.model, new BehaviorComponent()];
    this.modelChange.emit(this.model);
  }

  public onComponentSelect(event: any)
  {
    this.selectedComponent = event;
    this.selectedComponentChange.emit(this.selectedComponent);
  }

  public getComponentVariableData(): void
  {
    let resultKeyValues: SoltkKeyValue[] = [];
    this.model.forEach(component => {
      // Collect Component Values into SolTkKeyValues:
      resultKeyValues.push({ key: component.name + ".positionX", data: component.positionX.toString(), operator: 0 });
      resultKeyValues.push({ key: component.name + ".positionY", data: component.positionY.toString(), operator: 0 });
      resultKeyValues.push({ key: component.name + ".positionZ", data: component.positionZ.toString(), operator: 0 });
      resultKeyValues.push({ key: component.name + ".scaleX", data: component.scaleX.toString(), operator: 0 });
      resultKeyValues.push({ key: component.name + ".scaleY", data: component.scaleY.toString(), operator: 0 });
      resultKeyValues.push({ key: component.name + ".scaleZ", data: component.scaleZ.toString(), operator: 0 });
      resultKeyValues.push({ key: component.name + ".rotationX", data: component.rotationX.toString(), operator: 0 });
      resultKeyValues.push({ key: component.name + ".rotationY", data: component.rotationY.toString(), operator: 0 });
      resultKeyValues.push({ key: component.name + ".rotationZ", data: component.rotationZ.toString(), operator: 0 });
      resultKeyValues.push({ key: component.name + ".enabled", data: component.enabled.toString(), operator: 0 });
    });

    console.log(resultKeyValues);
    this.getStateData.emit(resultKeyValues);
    this.getStateData.next(resultKeyValues);



    //return resultKeyValues;

  }

}
