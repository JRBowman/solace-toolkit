import { BehaviorState } from "./behaviorstate";

export class BehaviorBranch {
    public id?: string;
    public name?: string = "BehaviorBranch";
    public description?: string = "";
    public states: BehaviorState[] = [];
    public branchType?: string;
    public tags?: string = "";


    public GetStates(): BehaviorState[] {
        return this.states;
    }
}
