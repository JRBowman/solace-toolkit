import { SoltkKeyValue } from "./soltk-key-value";

export class BehaviorAnimation {

    public id: string = "<id>";
    public name: string = "<name>";
    public description: string = "<description>";
    public startFrameData: BehaviorAnimationData = new BehaviorAnimationData();
    public actFrameData: BehaviorAnimationData = new BehaviorAnimationData();
    public endFrameData: BehaviorAnimationData = new BehaviorAnimationData();
    public tags: string = "";
    public keys: SoltkKeyValue[] = [];
    
}

export class BehaviorAnimationData {
    public id: string = "";
    public name: string = "";
    public description: string = "";
    public assemblyType: string = "";
    public tags: string = "";
    public enabled: boolean = false;

    public loop: boolean = true;
    public invert: boolean = false;
    public mirror: boolean = false;
    public speed: number = 1;

    public framesJson: string = "";
    public framesSheet: string = "";
}
