import { IModelTK } from "./imodel-tk";
import { ParticleEmitter } from "./particle-emitter";

export class ParticleSystem implements IModelTK {

    public id?: number = 0;
    public name?: string = "ParticleSystem";
    public description?: string = "";
    public tags?: string = "";

    public created?: string = "";
    public updated?: string = "";

    public colorKey: string = "#ffffff";
    public MaxParticles: number = 1000;
    public offsetX: number = 0;
    public offsetY: number = 0;
    public autoTrigger: boolean = true;
    public autoTriggerDelay: number = 0;
    public timeToLive: number = 0;

    public emitters: ParticleEmitter[] = [];

}