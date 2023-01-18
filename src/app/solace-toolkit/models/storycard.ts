import { ActionEvent } from "./actionevent";
import { IModelTK } from "./imodel-tk";
import { SoltkKeyValue } from "./soltk-key-value";

export class StoryCard implements IModelTK {

    public id?: string;
    public name?: string = "StoryCard";
    public description?: string = "A Chronological Element of the Story and World Progression.";
    public tags?: string = "";

    public startTime: number = 0;
    public duration: number = 0;
    public endTime: number = 0;

    public order: number = 0;

    public conditions: SoltkKeyValue[] = [];
    public downstreamData: SoltkKeyValue[] = [];

    public events: ActionEvent[] = [];
}
