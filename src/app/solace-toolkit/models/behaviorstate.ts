import { ActionEvent } from "./actionevent";
import { BehaviorAction } from "./behavioraction";
import { BehaviorAnimation } from "./behavioranimation";
import { BehaviorCondition } from "./behaviorcondition";
import { IModelTK } from "./imodel-tk";
import { SoltkKeyValue } from "./soltk-key-value";

export class BehaviorState implements IModelTK {
    public id?: number = 0;
    public name?: string = "BehaviorState";
    public description?: string = "";
    public tags?: string = "";

    // Associated Owners:
    public behaviorSystemId: number = 0;
    public parentId: number = 0;

    public animation: BehaviorAnimation = new BehaviorAnimation();

    // Conditions & Events:
    public conditions: SoltkKeyValue[] = [];
    public events: ActionEvent[] = [];

    // Stage Data:
    public startData: SoltkKeyValue[] = [];
    public actData: SoltkKeyValue[] = [];
    public endData: SoltkKeyValue[] = [];
    public nextStates: BehaviorState[] = [];

    // State Governance:
    public startDelay?: number = 0;
    public endDelay?: number = 0;
    public interruptable?: boolean;
    public stateType?: string;
    public type: StateType = StateType.State;

    public runCount: number = 0;
    public noOp: boolean = false;

    public enabled: boolean = true;
}

export enum StateType
{
    State,
    Branch
}
