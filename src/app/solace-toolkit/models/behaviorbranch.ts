import { BehaviorCondition } from "./behaviorcondition";
import { BehaviorState } from "./behaviorstate";
import { IModelTK } from "./imodel-tk";
import { SoltkKeyValue } from "./soltk-key-value";

export class BehaviorBranch implements IModelTK{
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
