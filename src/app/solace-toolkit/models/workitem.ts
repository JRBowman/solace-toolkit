import { BehaviorAnimationData } from "./behavioranimation";
import { WorkItemArtifact } from "./work-item-artifact";
import { WorkComment } from "./workcomment";
import { WorkPayment } from "./workpayment";

export class WorkItem {
    public id?: number;
    public name: string = "Task";
    public description: string = "";
    public assemblyType: string = "";
    public tags: string = "";
    public created: Date = new Date();
    public updated: Date = new Date();

    public hoursEstimate: number = 0;
    public hoursActual: number = 0;

    public workProjectId?: number;

    public isPaid: boolean = false;
    public comments: WorkComment[] = [];

    public payment?: WorkPayment;

    public artifact: WorkItemArtifact = new WorkItemArtifact();
}
