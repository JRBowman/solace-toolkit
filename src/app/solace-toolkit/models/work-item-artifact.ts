export class WorkItemArtifact {
    public id?: string ;
    public name: string = "";
    public description: string = "";
    public assemblyType: string = "";
    public tags: string = "";

    public artifactUrl: string = "";
    public created: Date = new Date();
    public updated: Date = new Date();
    
}
