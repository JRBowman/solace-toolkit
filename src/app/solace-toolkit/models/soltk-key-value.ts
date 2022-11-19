export class SoltkKeyValue {
    public id?: string;
    public key: string = "";
    public data: string = "";
    public operator: number = 0;

    public static conditionalOperatorValues: string[] = ["==", "!=", ">", ">=", "<", "<="];
    public static actionOperatorValues: string[] = ["=>", "+=", "*=", "/=", "%=", "^="];
}
