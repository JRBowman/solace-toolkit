import { IModelTK } from "./imodel-tk";

export class ParticleEmitterModifier implements IModelTK {

    public id?: number = 0;
    public name?: string = "ParticleEmitterModifier";
    public description?: string = "";
    public tags?: string = "";

    public created?: string = "";
    public updated?: string = "";

    public modifierType: EmitterModifier = EmitterModifier.Opacity;

    public restitutionCoefficient?: number = 0;
    public circleRadius?: number = 16;
    public circleInside?: boolean = false;

    public rectWidth?: number = 16;
    public rectHeight?: number = 16;

    public dragCoefficient?: number = 0;
    public dragDensity?: number = 0;

    public gravityDirectionX?: number = 0;
    public gravityDirectionY?: number = 1;
    public gravityStrength?: number = 8;

    public rotationRate?: number = 0;

    public stationaryColor?: string = "#ffffff";
    public velocityColor?: string = "#ffffff";
    public velocityThreshold?: number = 1;

    public vortexMass?: number = 0;
    public vortexMaxSpeed?: number = 1;
    public vortexPositionX?: number = 0;
    public vortexPositionY?: number = 0;

}

export enum EmitterModifier
{
    Age,
    CircleContainer,
    RectangleContainer,
    RectangleContainerLoop,
    Drag,
    Gravity,
    Opacity,
    Rotation,
    VelocityColor,
    Velocity,
    Vortex
}