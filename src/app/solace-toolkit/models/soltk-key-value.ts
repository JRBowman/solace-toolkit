import { IModelTK } from "./imodel-tk";

export class SoltkKeyValue implements IModelTK {
    public id?: number = 0;
    public key: string = "";

    public data: string = "";
    public operator: number = 0;

    // Data Type:
    public type?: number = 0;

    // Type Specific Fields:
    public floatData?: number = 0;
    public intData?: number = 0;
    public boolData?: boolean = false;

    public static dataTypes: string[] = ["String", "Float", "Integer", "Boolean"];
    public static conditionalOperatorValues: string[] = ["==", "!=", ">", ">=", "<", "<="];
    public static actionOperatorValues: string[] = ["=>", "+=", "*=", "/=", "%=", "^="];
}
