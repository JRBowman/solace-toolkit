import { ActionMessage } from "./actionmessage";
import { BehaviorCondition } from "./behaviorcondition";
import { IModelTK } from "./imodel-tk";
import { SoltkKeyValue } from "./soltk-key-value";

export class ActionEvent implements IModelTK {

    public id?: number = 0;
    public name?: string = "ActionEvent";
    public description?: string = "An Event is used by Behaviors to conditionally Trigger Data Changes - Use for Inputs, Data Changes, Interactions between one or more objects, etc.";
    public tags?: string = "";

    public condition: BehaviorCondition[] = [];
    public conditions: SoltkKeyValue[] = [];
    public downstreamData: SoltkKeyValue[] = [];

    public messages: ActionMessage[] = [];
}
