export class WorkItemArtifact {
    public id?: number;
    public name: string = "";
    public description: string = "";
    public assemblyType: string = "";
    public tags: string = "";

    public artifactUrl: string = "";
    public created: Date = new Date();
    public updated: Date = new Date();
    
}
