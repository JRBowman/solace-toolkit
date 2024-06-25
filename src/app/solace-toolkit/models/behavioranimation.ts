import { Artifact } from "./artifact";
import { BehaviorAnimationFrame } from "./behavior-animation-frame";
import { IModelTK } from "./imodel-tk";
import { SolTkComponent } from "./soltk-component";
import { SoltkKeyValue } from "./soltk-key-value";

export class BehaviorAnimation implements IModelTK {

    public id?: number = 0;
    public name: string = "<name>";
    public description: string = "<description>";
    public tags: string = "";

    // public startFrameData?: BehaviorAnimationData;
    public actFrameData?: BehaviorAnimationData;
    public components: SolTkComponent[] = [];
    // public endFrameData?: BehaviorAnimationData;
    
    public keys: SoltkKeyValue[] = [];
}

export class BehaviorAnimationData implements IModelTK {
    public id?: number = 0;
    public name: string = "";
    public description: string = "";
    public assemblyType: string = "";
    public tags: string = "";

    public enabled: boolean = false;

    public frames: BehaviorAnimationFrame[] = [];

    // public components: BehaviorComponent[] = [];

    public loop: boolean = true;
    public invert: boolean = false;
    public mirror: boolean = false;
    public speed: number = 1;
    public runCount: number = 1;

    public framesJson: string = "";
    public framesSheet: string = "";

    // Artifact Ref:
    public artifactId: number = 0;
    public artifact?: Artifact;
}
