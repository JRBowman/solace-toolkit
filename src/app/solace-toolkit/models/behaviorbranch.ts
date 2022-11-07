import { BehaviorCondition } from "./behaviorcondition";
import { BehaviorState } from "./behaviorstate";
import { SoltkKeyValue } from "./soltk-key-value";

export class BehaviorBranch {
    public id?: string;
    public name?: string = "BehaviorBranch";
    public description?: string = "";
    public states: BehaviorState[] = [];
    public conditions: SoltkKeyValue[] = [];
    public branchType?: string;
    public tags?: string = "";


    public GetStates(): BehaviorState[] {
        return this.states;
    }
}
