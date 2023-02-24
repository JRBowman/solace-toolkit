import { ActionEvent } from "./actionevent";
import { SoltkKeyValue } from "./soltk-key-value";

export class MapCell {
    public id?: number;
    public name?: string = "Map";
    public description?: string = "";
    public tags?: string = "";

    public selected?: boolean = false;

    // Cell Data:
    public x: number = 0;
    public y: number = 0;
    public colorKey: string = "";
    public enabled: boolean = false;

    public enterData: SoltkKeyValue[] = [];
    public enterEvents: ActionEvent[] = [];

    public activeData: SoltkKeyValue[] = [];
    public activeEvents: ActionEvent[] = [];


    public exitData: SoltkKeyValue[] = [];
    public exitEvents: ActionEvent[] = [];
}
