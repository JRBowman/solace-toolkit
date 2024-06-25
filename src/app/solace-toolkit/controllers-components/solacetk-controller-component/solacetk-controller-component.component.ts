import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SoltkKeyValue } from '../../models/soltk-key-value';
import { SolTkComponent } from '../../models/soltk-component';

@Component({
  selector: 'solacetk-controller-component',
  templateUrl: './solacetk-controller-component.component.html',
  styleUrls: ['./solacetk-controller-component.component.css']
})
export class SolacetkControllerComponentComponent implements OnInit {

  constructor() { }

  @Input() model: SolTkComponent[] = [];
  @Output() modelChange: EventEmitter<SolTkComponent[]> = new EventEmitter<SolTkComponent[]>();

  @Input() selectedComponent?: SolTkComponent;
  @Output() selectedComponentChange: EventEmitter<SolTkComponent> = new EventEmitter<SolTkComponent>();

  @Input() panelType: string = "panel";
  @Input() panelElevation: string = "0";

  @Input() panelColor: string = "darkgrey";

  public componentTypes?: string[] = SolTkComponent.componentTypes;

  @Output() getStateData: EventEmitter<SoltkKeyValue[]> = new EventEmitter<SoltkKeyValue[]>();

  ngOnInit(): void {
  }

  public addComponent()
  {
    if (!this.model) this.model = [];
    this.model = [...this.model, new SolTkComponent()];
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



    //return resultKeyValues;

  }

  public ComponentTypeChange(type: any): void
  {
    if (this.selectedComponent)
    {
      if (type.value == 0) this.selectedComponent.componentData = [];
      else if (type.value == 1) this.selectedComponent.componentData = this.SpriteRendererData();
      else if (type.value == 2) this.selectedComponent.componentData = [];
      else if (type.value == 3) this.selectedComponent.componentData = this.SoundEmitterData();
      else if (type.value == 4) this.selectedComponent.componentData = this.TargetPointData();
      else if (type.value == 5) this.selectedComponent.componentData = this.PointFollowerData();
      else if (type.value == 6) this.selectedComponent.componentData = this.RotationTrackerData();
      else if (type.value == 7) this.selectedComponent.componentData = this.LightData();
      else if (type.value == 8) this.selectedComponent.componentData = this.InputData();
      else if (type.value == 9) this.selectedComponent.componentData = this.AudioEffectData();
      else if (type.value == 10) this.selectedComponent.componentData = this.VisualEffectData();
      else if (type.value == 11) this.selectedComponent.componentData = this.ParticleSystemData();
      else if (type.value == 12) this.selectedComponent.componentData = this.SpriteAnimatorData();
      else if (type.value == 13) this.selectedComponent.componentData = this.BehaviorAnimatorData();
      else if (type.value == 14) this.selectedComponent.componentData = this.PhysicsBodyData();
      else if (type.value == 15) this.selectedComponent.componentData = this.ColliderData();
    }
  }

  public SpriteRendererData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];
    return data;
  }

  public SoundEmitterData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];
    return data;
  }

  public TargetPointData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];
    return data;
  }

  public PointFollowerData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];
    return data;
  }

  public RotationTrackerData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];
    return data;
  }

  public LightData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];

    data.push({ key: this.selectedComponent?.name + ".Intensity", operator: 0, data: "", floatData: 0.5, type: 1  });
    data.push({ key: this.selectedComponent?.name + ".IntensitySpeed", operator: 0, data: "", floatData: 1, type: 1 });
    data.push({ key: this.selectedComponent?.name + ".Width", operator: 0, data: "", floatData: 48, type: 1  });
    data.push({ key: this.selectedComponent?.name + ".Height", operator: 0, data: "", floatData: 48, type: 1  });
    data.push({ key: this.selectedComponent?.name + ".Color", operator: 0, data: "#ffffffff" });
    data.push({ key: this.selectedComponent?.name + ".OffsetX", operator: 0, data: "", floatData: 0, type: 1  });
    data.push({ key: this.selectedComponent?.name + ".OffsetY", operator: 0, data: "", floatData: 0, type: 1  });
    data.push({ key: this.selectedComponent?.name + ".OriginX", operator: 0, data: "", floatData: 0.5, type: 1  });
    data.push({ key: this.selectedComponent?.name + ".OriginY", operator: 0, data: "", floatData: 0.5, type: 1  });

    return data;
  }

  public InputData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];
    return data;
  }

  public AudioEffectData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];
    return data;
  }

  public VisualEffectData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];
    return data;
  }

  public ParticleSystemData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];
    return data;
  }

  public SpriteAnimatorData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];
    return data;
  }

  public BehaviorAnimatorData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];
    return data;
  }

  public PhysicsBodyData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];
    return data;
  }

  public ColliderData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];
    return data;
  }

}
