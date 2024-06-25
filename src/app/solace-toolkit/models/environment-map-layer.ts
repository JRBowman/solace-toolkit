import { Artifact } from "./artifact";
import { SoltkKeyValue } from "./soltk-key-value";

export class EnvironmentMapLayer {
    public id?: number = 0;
    public name?: string = "Layer";
    public description?: string = "";
    public tags?: string = "";

    public enabled: boolean = true;
    public isCollidable: boolean = false;
    public isBreakable: boolean = false;

    public tintColor?: string;

    // Layer Data:
    public layerOrder: number = 0;
    public layerData: SoltkKeyValue[] = [];
    public layerName: string = "Default";

    // Parallax:
    public parallaxDistance: number = 0;
    public parallaxEnabled: boolean = false;
    public parallaxX: boolean = false;
    public parallaxY: boolean = false;

    // Artifact Ref:
    public artifactId: number = 0;
    public artifact?: Artifact;

}
