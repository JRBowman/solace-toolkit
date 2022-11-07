import { SoltkKeyValue } from "./soltk-key-value";

export class ActionMessage {

    public id?: string;
    public name?: string = "EventMessage";
    public description?: string = "Event Message to Send to a Controller.";
    public tags?: string = "";

    public data: SoltkKeyValue[] = [];

    public targetName: string = "";
    public targetType: string = "Named Target";

}
