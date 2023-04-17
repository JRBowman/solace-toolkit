import { withRouterConfig } from "@angular/router";
import { BehaviorStatesComponent } from "../behaviors/behavior-states/behavior-states.component";
import { BehaviorAnimationFrame } from "./behavior-animation-frame";
import { IModelTK } from "./imodel-tk";
import { SoltkKeyValue } from "./soltk-key-value";

export class BehaviorAnimation implements IModelTK {

    public id?: number = 0;
    public name: string = "<name>";
    public description: string = "<description>";
    public startFrameData?: BehaviorAnimationData;
    public actFrameData?: BehaviorAnimationData;
    public endFrameData?: BehaviorAnimationData;
    public tags: string = "";
    public keys: SoltkKeyValue[] = [];
    
}

export class BehaviorAnimationData implements IModelTK {
    public id?: number = 0;
    public name: string = "";
    public description: string = "";
    public assemblyType: string = "";
    public tags: string = "";
    public enabled: boolean = false;

    public frames: BehaviorAnimationFrame[] = [];

    public components: BehaviorComponent[] = [];

    public loop: boolean = true;
    public invert: boolean = false;
    public mirror: boolean = false;
    public speed: number = 1;

    public framesJson: string = "";
    public framesSheet: string = "";
}

export class BehaviorComponent implements IModelTK {
    public id?: number = 0;
    public name: string = "";
    public description: string = "";
    public assemblyType: string = "";
    public tags: string = "";

    // Component Postioning Data:
    public positionX: number = 0;
    public positionY: number = 0;
    public positionZ: number = 0;

    public scaleX: number = 1;
    public scaleY: number = 1;
    public scaleZ: number = 1;

    public rotationX: number = 0;
    public rotationY: number = 0;
    public rotationZ: number = 0;

    public movableControllerId: number = 0;
    public behaviorAnimationId: number = 0;

    public enabled: boolean = true;

    public componentData: SoltkKeyValue[] = [];

    public color?: string = "white";

    // Defines Type of Component to create:
    public componentType: string = "";
    public static readonly componentTypes?: string[] = ["SpriteRenderer", "RayCastPoint", 
    "SoundEmitter", "TargetPoint", "WeaponController", 
    "AudioEffect", "VisualEffect", "ParticleSystem", 
    "GeneralObject", "EngineAnimator", "CollisionController"];

    // public static readonly defaultComponents: BehaviorComponent[] = [
    //     {
    //       name: "BodyCollider",
    //       positionX: 0.5,
    //       positionY: 0,
    //       positionZ: 0,
    //       rotationX: 0,
    //       rotationY: 0,
    //       rotationZ: 0,
    //       scaleX: 0.5,
    //       scaleY: 0.75,
    //       scaleZ: 0,
    //       componentType: "CollisionController",
    //       tags: "",
    //       assemblyType: "",
    //       enabled: true,
    //       componentData: [],
    //       description: "",
    //       id: 0
    //     },
    //     {
    //       name: "RightRay",
    //       positionX: 0.33,
    //       positionY: 0,
    //       positionZ: 0,
    //       rotationX: 0,
    //       rotationY: 0,
    //       rotationZ: 0,
    //       scaleX: 0.1,
    //       scaleY: 0.75,
    //       scaleZ: 0,
    //       componentType: "CollisionController",
    //       tags: "",
    //       assemblyType: "",
    //       enabled: true,
    //       componentData: [],
    //       description: "",
    //       id: 0
    //     },
    //     {
    //       name: "LeftRay",
    //       positionX: 1.5,
    //       positionY: 0,
    //       positionZ: 0,
    //       rotationX: 0,
    //       rotationY: 0,
    //       rotationZ: 0,
    //       scaleX: 0.1,
    //       scaleY: 0.75,
    //       scaleZ: 0,
    //       componentType: "CollisionController",
    //       tags: "",
    //       assemblyType: "",
    //       enabled: true,
    //       componentData: [],
    //       description: "",
    //       id: 0
    //     },
    //     {
    //       name: "TopRay",
    //       positionX: 0.5,
    //       positionY: 1.5,
    //       positionZ: 0,
    //       rotationX: 0,
    //       rotationY: 0,
    //       rotationZ: 0,
    //       scaleX: 0.5,
    //       scaleY: 0.75,
    //       scaleZ: 0,
    //       componentType: "CollisionController",
    //       tags: "",
    //       assemblyType: "",
    //       enabled: true,
    //       componentData: [],
    //       description: "",
    //       id: 0
    //     },
    //     {
    //       name: "BottomRay",
    //       positionX: 0.5,
    //       positionY: 0,
    //       positionZ: 0,
    //       rotationX: 0,
    //       rotationY: 0,
    //       rotationZ: 0,
    //       scaleX: 0.5,
    //       scaleY: 0.1,
    //       scaleZ: 0,
    //       componentType: "CollisionController",
    //       tags: "",
    //       assemblyType: "",
    //       enabled: true,
    //       componentData: [],
    //       description: "",
    //       id: 0
    //     }
    //   ];

      public static getStateValues(model: BehaviorComponent): SoltkKeyValue[] {
        return [{ key: model.name + ".enabled", data: model.enabled.toString(), operator: 0 },
        { key: model.name + ".positionX", data: model.positionX.toString(), operator: 0 },
        { key: model.name + ".positionY", data: model.positionY.toString(), operator: 0 },
        { key: model.name + ".positionZ", data: model.positionZ.toString(), operator: 0 },
        { key: model.name + ".scaleX", data: model.scaleX.toString(), operator: 0 },
        { key: model.name + ".scaleY", data: model.scaleY.toString(), operator: 0 },
        { key: model.name + ".scaleZ", data: model.scaleZ.toString(), operator: 0 },
        { key: model.name + ".rotationX", data: model.rotationX.toString(), operator: 0 },
        { key: model.name + ".rotationY", data: model.rotationY.toString(), operator: 0 },
        { key: model.name + ".rotationZ", data: model.rotationZ.toString(), operator: 0 }];
      }
}
