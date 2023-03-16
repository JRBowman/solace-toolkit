import { WorkComment } from "./workcomment";
import { WorkItem } from "./workitem";
import { WorkPayment } from "./workpayment";

export class WorkProject {
    public id?: number;
    public name: string = "";
    public description: string = "";
    public assemblyType: string = "";
    public tags: string = "";

    public totalEstimatedHours: number = 0;
    public totalActualHours: number = 0;
    public paidHours: number = 0;
    public totalPaid: number = 0;
    public remainingPayment: number = 0;

    public workItems: WorkItem[] = [];
    public payments: WorkPayment[] = [];
    public comments: WorkComment[] = [];

    public projectBillable: boolean = false;

    public created: Date = new Date();
    public updated: Date = new Date();
}
