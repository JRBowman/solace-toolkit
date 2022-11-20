import { BehaviorComponent } from "./behavioranimation";
import { BehaviorSystem } from "./behaviorsystem";
import { IModelTK } from "./imodel-tk";

export class MovableController implements IModelTK {

    public id?: string;
    public name?: string = "MovableController";
    public description?: string = "A MovableController can collide and move within the game world.";
    public tags?: string = "";

    public pixelKeyColor?: string = "#FFFFFF";
    public controllerData?: string[];
    public worldPositionX?: number = 0;
    public worldPositionY?: number = 0;
    public worldPositionZ?: number = 0;
    public mapPositionX?: number = 0;
    public mapPositionY?: number = 0;
    public collisionType?: CollisionDetectionType = CollisionDetectionType.RayCast;
    public spriteUri?: string = "";

    public behaviorSystemId?: string;
    public behaviorSystem?: BehaviorSystem = new BehaviorSystem();

    public components: BehaviorComponent[] = [];

    public useFriction?: boolean = true;
    public affectedByGravity?: boolean = true;
    public canMove?: boolean = true;
    public mass?: number = 1;
    public speed?: number = 0;
    public isHit?: boolean = false;

    public type?: MovableControllerType = MovableControllerType.Behavior;
}

export enum MovableControllerType
{
    Behavior,
    NavMeshAgent,
    Dynamic
}

export enum CollisionDetectionType
{
    RayCast,
    BoxCast,
    CircleCast,
    CapsuleCast
}
