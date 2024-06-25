import { BehaviorSystem } from "./behaviorsystem";
import { IModelTK } from "./imodel-tk";
import { SolTkComponent } from "./soltk-component";
import { SoltkKeyValue } from "./soltk-key-value";
import { SoundSet } from "./soundset";

export class SolTkEntity implements IModelTK {

    public id?: number = 0;
    public name?: string = "Entity";
    public description?: string = "";

    public pixelKeyColor?: string = "#FFFFFF";

    public worldPositionX?: number = 0;
    public worldPositionY?: number = 0;
    public worldPositionZ?: number = 0;

    public mapPositionX?: number = 0;
    public mapPositionY?: number = 0;

    public collisionType?: CollisionDetectionType = CollisionDetectionType.None;

    public behaviorSystemId?: number;

    public components: SolTkComponent[] = [];

    public controllerData: SoltkKeyValue[] = [];
    public soundSet?: SoundSet;

    public useFriction?: boolean = true;
    public affectedByGravity?: boolean = true;
    public canMove?: boolean = true;
    public mass?: number = 1;
    public speed?: number = 0;

    // Non Serialized Data:
    public spriteUri?: string = "";
    public behaviorSystem?: BehaviorSystem = new BehaviorSystem();
}

export enum CollisionDetectionType {
    None,
    RayCast,
    BoxCast,
    CircleCast,
    CapsuleCast
}

export enum SolTkBodyType {
    None,
    Static,
    Kinematic,
    Dynamic
}