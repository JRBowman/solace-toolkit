import { ActionEvent } from "./actionevent";
import { BehaviorAction } from "./behavioraction";
import { BehaviorAnimation } from "./behavioranimation";
import { BehaviorCondition } from "./behaviorcondition";
import { SoltkKeyValue } from "./soltk-key-value";

export class BehaviorState {
    public id?: string;
    public name?: string = "BehaviorState";
    public description?: string = "";
    public tags?: string = "";

    public next?: BehaviorState;

    public animations: BehaviorAnimation[] = [];

    public conditions: BehaviorCondition[] = [];
    public events: ActionEvent[] = [];

    public startData: SoltkKeyValue[] = [];
    public actData: SoltkKeyValue[] = [];
    public endData: SoltkKeyValue[] = [];

    public startDelay?: number = 0;
    public endDelay?: number = 0;
    public interruptable?: boolean;
    public stateType?: string;
    public runCount: number = 0;

    public enabled: boolean = true;

}
