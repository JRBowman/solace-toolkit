export class SoltkKeyValue {
    public id?: string;
    public key: string = "";
    public data: string = "";
    public operator: number = 0;

    public static operatorValues: string[] = ["==", "!=", ">", ">=", "<", "<="]
}
