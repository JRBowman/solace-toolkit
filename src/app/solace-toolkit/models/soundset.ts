import { IModelTK } from "./imodel-tk";
import { SoundSource } from "./soundsource";

export class SoundSet implements IModelTK  {

    public id?: number = 0;
    public name?: string = "SoundSet";
    public description?: string = "Collection of Sound Sources.";
    public tags?: string = "";

    // Sound Set:
    public sources: SoundSource[] = [];
}
