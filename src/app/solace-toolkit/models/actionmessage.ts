import { IModelTK } from "./imodel-tk";
import { SoltkKeyValue } from "./soltk-key-value";

export class ActionMessage implements IModelTK {

    public id?: number = 0;
    public name?: string = "EventMessage";
    public description?: string = "Event Message to Send to a Controller.";
    public tags?: string = "";

    public data: SoltkKeyValue[] = [];

    public targetName: string = "";
    public targetType: number = 0;

    public static readonly targetTypes: string[] = ["Named Target", "Instance Target", "Collision Target", "Focus Target", "Message Queue"];

}
