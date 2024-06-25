import { IModelTK } from "./imodel-tk";

export class InputMapField implements IModelTK {

    public id?: number = 0;
    public name?: string = "Artifact";
    public description?: string = "";
    public tags?: string = "";

    public created?: string = "";
    public updated?: string = "";

    public engineField: EngineDataField = EngineDataField.None;
    public variableName: string = "";

}

export enum EngineDataField {
    None,
    VelocityX,
    VelocityY,
    VelocitySpeed,
    DirectionX,
    DirectionY,
    RightCollided,
    LeftCollided,
    TopCollided,
    BottomCollided,
    FaceDirectionX,
    FaceDirectionY,
}
