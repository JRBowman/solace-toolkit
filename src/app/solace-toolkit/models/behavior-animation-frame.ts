import { IModelTK } from "./imodel-tk";
import { SoltkKeyValue } from "./soltk-key-value";

export class BehaviorAnimationFrame implements IModelTK {

    public name: string = "frame01";
    public id?: number = 0;
    public order: number = 0;

    public speed: number = 1;
    public duration: number = 0;

    public width: number = 48;
    public height: number = 48;
    public x: number = 0;
    public y: number = 0;

    public frame: any = {};
    public frameData: string = "";
    
    public downstreamData: SoltkKeyValue[] = [];
}
