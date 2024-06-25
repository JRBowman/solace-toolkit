import { IModelTK } from "./imodel-tk";

export class ParticleEmitterInterpolator implements IModelTK {

    public id?: number = 0;
    public name?: string = "ParticleEmitterInterpolator";
    public description?: string = "";
    public tags?: string = "";

    public created?: string = "";
    public updated?: string = "";

    public interpolatorType: EmitterInterpolator = EmitterInterpolator.Opacity;

    public startColor?: string = "";
    public endColor?: string = "";

    public startHue?: string = "";
    public endHue?: string = "";

    public startOpacity?: number = 0;
    public endOpacity?: number = 0;

    public startRotation?: number = 0;
    public endRotation?: number = 0;

    public startScaleX?: number = 1;
    public startScaleY?: number = 1;

    public endScaleX?: number = 0;
    public endScaleY?: number = 0;

}

export enum EmitterInterpolator 
{
    Color,
    Hue,
    Opacity,
    Rotation,
    Scale
}