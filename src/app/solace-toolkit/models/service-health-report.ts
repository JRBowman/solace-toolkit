export class ServiceHealthReport {
    public serviceStatus: string[] = [];
    public dataStatus: string[] = [];
    public asepriteStatus: string[] = [];

    public aseMessage: string = "";
    public aseEnabled: boolean = false;
    public dataMessage: string = "";
    public totalServices: number = 0;
    public availableServices: number = 0;
    public dataServiceColor: string = "#ff0020";
    public serviceMessage: string = "";
}
