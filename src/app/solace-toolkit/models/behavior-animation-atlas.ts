import { BehaviorAnimation } from "./behavioranimation";
import { IModelTK } from "./imodel-tk";
import { SoltkKeyValue } from "./soltk-key-value";

export class BehaviorAnimationAtlas implements IModelTK {

    public name: string = "Atlas0";
    public id?: number = 0;

    public animations: BehaviorAnimation[] = [];

    public texture: string = "";
    
    public downstreamData: SoltkKeyValue[] = [];
}
