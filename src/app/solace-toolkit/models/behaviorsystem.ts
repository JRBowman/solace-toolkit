import { ActionEvent } from "./actionevent";
import { BehaviorBranch } from "./behaviorbranch";
import { BehaviorState } from "./behaviorstate";
import { SoltkKeyValue } from "./soltk-key-value";

export class BehaviorSystem {

    public id?: string;
    public name?: string;
    public description?: string;
    public tags?: string = "";
    public startState?: string;
    public behaviorType?: BehaviorType;
    public branches: BehaviorBranch[] = [];

    public varData: SoltkKeyValue[] = [];

    public events: ActionEvent[] = [];

    public desiredState: BehaviorState = new BehaviorState();
}

export enum BehaviorType
{
    Neutral = 0,
    Friendly = 1,
    Hostile = 2,
    Timid = 3,
    Incapacitated = 4,
    Unconcious = 5,
    Imperfect = 6,
    Complex = 7
}
