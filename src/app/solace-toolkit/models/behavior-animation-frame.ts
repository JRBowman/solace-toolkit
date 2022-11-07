import { SoltkKeyValue } from "./soltk-key-value";

export class BehaviorAnimationFrame {

    public name: string = "frame01";
    public id: string = "";
    public order: number = 0;
    public speed: number = 1;
    public duration: number = 0;
    public frame: any = {};
    public downstreamData: SoltkKeyValue[] = [];
}
