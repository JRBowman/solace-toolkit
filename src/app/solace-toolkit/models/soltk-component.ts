import { IModelTK } from "./imodel-tk";
import { SoltkKeyValue } from "./soltk-key-value";

export class SolTkComponent implements IModelTK {
    public id?: number = 0;
    public name: string = "";
    public description: string = "";
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

    // Associated Keys:
    public controllerId: number = 0;
    public behaviorAnimationId: number = 0;

    public enabled: boolean = true;

    public componentData: SoltkKeyValue[] = [];

    public colorKey?: string = "white";

    // Defines Type of Component to create:
    public componentType: SolTkComponentTypes = 0;

    public static readonly componentTypes?: string[] = [
        "GeneralObject", "SpriteRenderer", "RayCastPoint", 
        "SoundEmitter", "TargetPoint", "PointFollower", "RotationTracker",
        "Light", "InputComponent", "AudioEffect", "VisualEffect", "ParticleSystem",
        "SpriteAnimator", "BehaviorAnimator", "PhysicsBody", "Collider", "Timeline",
        "ParallaxScroller", "PathFollower", "Portal", "RayCaster", "Spawner", "Debuff"];

      public static getStateValues(model: SolTkComponent): SoltkKeyValue[] {
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

export enum SolTkComponentTypes
{
    GeneralObject,
    SpriteRenderer,
    RayCastPoint,
    SoundEmitter,
    TargetPoint,
    PointFollower,
    RotationTracker,
    Light,
    InputComponent,
    AudioEffect,
    VisualEffect,
    ParticleSystem,
    SpriteAnimator,
    BehaviorAnimator,
    PhysicsBody,
    Collider,
    Timeline,
    ParallaxScroller,
    PathFollower,
    Portal,
    RayCaster,
    Spawner,
    Debuff
}