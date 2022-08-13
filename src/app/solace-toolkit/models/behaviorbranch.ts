import { BehaviorState } from "./behaviorstate";

export class BehaviorBranch {
    public id?: string;
    public name?: string = "BehaviorBranch";
    public description?: string = "";
    public states: BehaviorState[] = [];
    public branchType?: string;
}
