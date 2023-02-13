import { ActionEvent } from "./actionevent";
import { BehaviorAction } from "./behavioraction";
import { BehaviorAnimation } from "./behavioranimation";
import { BehaviorCondition } from "./behaviorcondition";
import { IModelTK } from "./imodel-tk";
import { SoltkKeyValue } from "./soltk-key-value";

export class BehaviorState implements IModelTK {
    public id?: string;
    public name?: string = "BehaviorState";
    public description?: string = "";
    public tags?: string = "";

    public nextStates?: BehaviorState[] = [];

    public animation: BehaviorAnimation = new BehaviorAnimation();

    public conditions: SoltkKeyValue[] = [];
    public events: ActionEvent[] = [];

    public startData: SoltkKeyValue[] = [];
    public actData: SoltkKeyValue[] = [];
    public endData: SoltkKeyValue[] = [];

    public startDelay?: string = "0";
    public endDelay?: string = "0";
    public interruptable?: boolean;
    public stateType?: string;
    public runCount: number = 0;

    public enabled: boolean = true;
}
