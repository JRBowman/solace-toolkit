import { Artifact } from "./artifact";
import { IModelTK } from "./imodel-tk";
import { SoltkKeyValue } from "./soltk-key-value";

export class SoundSource implements IModelTK {

    public id?: number = 0;
    public name?: string = "Sound";
    public description?: string = "An Audio/Sound Source.";
    public tags?: string = "";

    public volume: number = 0;
    public pitch: number = 0;
    public playOnLoad: boolean = false;
    public isLoop: boolean = false;
    public isReactive: boolean = false;
    public clipName: string = "";
    public channel: string = "";

    public loopStartTime: string = "";
    public loopEndTime: string = "";

    public artifact?: Artifact;
    public artifactId: number = 0;

    public conditions?: SoltkKeyValue[] = [];
    public soundData?: SoltkKeyValue[] = [];
}