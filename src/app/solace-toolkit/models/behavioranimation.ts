import { BehaviorStatesComponent } from "../behaviors/behavior-states/behavior-states.component";
import { BehaviorAnimationFrame } from "./behavior-animation-frame";
import { IModelTK } from "./imodel-tk";
import { SoltkKeyValue } from "./soltk-key-value";

export class BehaviorAnimation implements IModelTK {

    public id: string = "<id>";
    public name: string = "<name>";
    public description: string = "<description>";
    public startFrameData: BehaviorAnimationData = new BehaviorAnimationData();
    public actFrameData: BehaviorAnimationData = new BehaviorAnimationData();
    public endFrameData: BehaviorAnimationData = new BehaviorAnimationData();
    public tags: string = "";
    public keys: SoltkKeyValue[] = [];
    
}

export class BehaviorAnimationData implements IModelTK {
    public id: string = "";
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
    public id: string = "";
    public name: string = "";
    public description: string = "";
    public assemblyType: string = "";
    public tags: string = "";

    // Component Postioning Data:
    public positionX: number = 0;
    public positionY: number = 0;
    public positionZ: number = 0;

    public scaleX: number = 0;
    public scaleY: number = 0;
    public scaleZ: number = 0;

    public rotationX: number = 0;
    public rotationY: number = 0;
    public rotationZ: number = 0;

    public enabled: boolean = true;

    public componentData: SoltkKeyValue[] = [];


    // Defines Type of Component to create:
    public componentType: string = "";
    public static readonly componentTypes?: string[] = ["SpriteRenderer", "RayCastPoint", 
    "SoundEmitter", "TargetPoint", "WeaponController", 
    "AudioEffect", "VisualEffect", "ParticleSystem", 
    "GeneralObject", "EngineAnimator", "CollisionController"];

    public static readonly defaultComponents: BehaviorComponent[] = [
        {
          name: "BodyCollider",
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 0,
          componentType: "CollisionController",
          tags: "",
          assemblyType: "",
          enabled: true,
          componentData: [],
          description: "",
          id: ""
        },
        {
          name: "RightRay",
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 0,
          componentType: "CollisionController",
          tags: "",
          assemblyType: "",
          enabled: true,
          componentData: [],
          description: "",
          id: ""
        },
        {
          name: "LeftRay",
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 0,
          componentType: "CollisionController",
          tags: "",
          assemblyType: "",
          enabled: true,
          componentData: [],
          description: "",
          id: ""
        },
        {
          name: "TopRay",
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 0,
          componentType: "CollisionController",
          tags: "",
          assemblyType: "",
          enabled: true,
          componentData: [],
          description: "",
          id: ""
        },
        {
          name: "BottomRay",
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 0,
          componentType: "CollisionController",
          tags: "",
          assemblyType: "",
          enabled: true,
          componentData: [],
          description: "",
          id: ""
        }
      ];
}
