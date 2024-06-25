export class SolTkOperationStatus {
    public id?: number = 0;
    public name?: string = "op";
    public description?: string = "";
    public tags?: string = "";

    public logs?: string[];
    public errors?: string[];
    public exceptions?: any[];
}
