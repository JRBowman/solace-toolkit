import { SoltkKeyValue } from "./soltk-key-value";

export class EnvironmentMapLayer {
    public id?: string;
    public name?: string = "Layer";
    public description?: string = "";
    public tags?: string = "";

    public enabled: boolean = true;

    // Layer Data:
    public layerOrder: number = 0;
    public layerData: SoltkKeyValue[] = [];
    public layerName: string = "Default";

}
