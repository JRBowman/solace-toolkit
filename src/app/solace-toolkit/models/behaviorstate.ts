import { BehaviorAction } from "./behavioraction";
import { BehaviorAnimation } from "./behavioranimation";

export class BehaviorState {
    public id?: string;
    public name?: string = "BehaviorState";
    public description?: string = "";
    public actionId?: string;
    public action?: BehaviorAction;
    public next?: BehaviorState;

    public animations: BehaviorAnimation[] = [];

    public startDelay?: number = 0;
    public endDelay?: number = 0;
    public interruptable?: boolean;
    public stateType?: string;

}
