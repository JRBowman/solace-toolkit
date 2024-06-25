import { IModelTK } from "./imodel-tk";
import { InputMapField } from "./input-map-field";

export class InputMap implements IModelTK {

    public id?: number = 0;
    public name?: string = "Artifact";
    public description?: string = "";
    public tags?: string = "";

    public created?: string = "";
    public updated?: string = "";

    public mapType: EngineMappingType = EngineMappingType.None;
    public mappings: InputMapField[] = [];
    
}

export enum EngineMappingType {
    None,
    Controls,
    Physics,
    Environment,
    Entity
}