import { IModelTK } from "./imodel-tk";
import { SolTkOperationStatus } from "./soltk-operation-status";

export class SolTkOperation<T> implements IModelTK {
    public id?: number = 0;
    public name?: string = "op";
    public description?: string = "";
    public tags?: string = "";

    public status?: SolTkOperationStatus;
    public data?: T;
    public resultCode: number = 0;
    public operationName: string = "op";
    public startTime: string = "";
    public endTime: string = "";
}
