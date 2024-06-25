import { IModelTK } from "./imodel-tk";

export class Artifact implements IModelTK {

    public id?: number = 0;
    public name?: string = "Artifact";
    public description?: string = "";
    public tags?: string = "";

    public created?: string = "";
    public updated?: string = "";

    public artifactDirectory: string = "";
    public artifactUrl: string = "";
    public artifactName: string = "";
    public artifactExtension: string = "";
    public collectionRoot: string = "";

}
