import { IModelTK } from "./imodel-tk";
import { SoltkKeyValue } from "./soltk-key-value";

export class BehaviorCondition implements IModelTK {

    public id: string = "";
    public name?: string = "Condition01";
    public description?: string;
    public conditions: SoltkKeyValue[] = [];
    public tags?: string = "";
}
