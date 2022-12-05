import { EnvironmentMapLayer } from "./environment-map-layer";

export class EnvironmentMap {
    public id?: string;
    public name?: string = "Map";
    public description?: string = "";
    public tags?: string = "";

    // Map Data:
    public layers: EnvironmentMapLayer[] = [];
}
