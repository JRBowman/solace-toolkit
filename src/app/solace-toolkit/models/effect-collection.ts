import { EffectComponent } from "./effect-component";
import { IModelTK } from "./imodel-tk";

export class EffectCollection implements IModelTK {

    public id?: number = 0;
    public name?: string = "EffectCollection";
    public description?: string = "";
    public tags?: string = "";

    public created?: string = "";
    public updated?: string = "";

    public effects: EffectComponent[] = [];

}
