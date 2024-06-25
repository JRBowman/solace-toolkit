import { IModelTK } from "./imodel-tk";
import { ParticleEmitterModifier } from "./particle-emitter-modifier";

export class ParticleEmitter implements IModelTK {

    public id?: number = 0;
    public name?: string = "ParticleEmitter";
    public description?: string = "";
    public tags?: string = "";

    public created?: string = "";
    public updated?: string = "";

    public capacity: number = 1000;
    public timeToLive: number = 8;
    public offsetX: number = 0;
    public offsetY: number = 0;

    public profile: EmitterProfile = EmitterProfile.Point;

    public modifiers: ParticleEmitterModifier[] = [];

    public particleTexture?: string = "";
    public textureX?: number = 0;
    public textureY?: number = 0;
    public textureWidth?: number = 8;
    public textureHeight?: number = 8;

    public speedMin?: number = 0;
    public speedMax?: number = 8;

    public quantityMin?: number = 0;
    public quantityMax?: number = 8;

    public rotationMin?: number = 0;
    public rotationMax?: number = 8;

    public scaleXMin?: number = 1;
    public scaleXMax?: number = 1;

    public scaleYMin?: number = 1;
    public scaleYMax?: number = 1;

    public massMin?: number = 0;
    public massMax?: number = 0;

    public opacityMin?: number = 1;
    public opacityMax?: number = 1;

    public colorStart?: string = "#ffffff";
    public colorEnd?: string = "#ffffff";

    public lineX?: number = 0;
    public lineY?: number = 0;
    public lineLength?: number = 0;

    public boxWidth?: number = 16;
    public boxHeight?: number = 16;

    public circleRadius?: number = 16;
    public circleRadiationType?: number = 0;

    public sprayDirectionX?: number = 0;
    public sprayDirectionY?: number = 0;
    public spraySpread?: number = 1;

}

export enum EmitterProfile
{
    Point,
    Line,
    Box,
    BoxFill,
    BoxUniform,
    Circle,
    Spray,
    Ring
}