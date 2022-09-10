import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { WorkItem } from '../../models/workitem';
import { WorkProject } from '../../models/workprojects';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private service: SolacetkService) { }

  public model: WorkProject = new WorkProject();

  public showProjectBuckets: boolean = false;

  public backlog: WorkItem[] = [];
  public backlogCollapse: boolean = false;
  public inProgress: WorkItem[] = [];
  public inProgressCollapse: boolean = false;
  public review: WorkItem[] = [];
  public reviewCollapse: boolean = false;
  public complete: WorkItem[] = [];
  public completeCollapse: boolean = false;
  public modelLoaded: boolean = false;

  public totalEstimated: number = 0;
  public totalActual: number = 0;
  public totalPaid: number = 0;
  public totalOutstanding: number = 0;

  ngOnInit(): void {

  }

  ModelLoaded(): void {
    console.log(this.model);
    this.modelLoaded = true;
    this.showProjectBuckets = true;

    this.ReportHours();

  }

  ModelClosed(): void {
    this.backlog = [];
    this.inProgress = [];
    this.review = [];
    this.complete = [];
    this.showProjectBuckets = false;
  }

  ReportHours(loadModel: boolean = false) {

    if (loadModel) this.model.workItems = [...this.backlog, ...this.inProgress, ...this.review, ...this.complete];

    if (!this.model.workItems || this.model.workItems.length == 0) return;

    this.totalActual = 0;
    this.totalEstimated = 0;
    this.totalOutstanding = 0;
    this.totalPaid = 0;

    this.model.workItems.forEach((item) => {
      this.totalActual += +item.hoursActual;
      this.totalEstimated += +item.hoursEstimate;

      if (item.tags.includes("#complete")) {
        this.totalPaid  += +item.hoursActual;
      }
      //this.tot
    });

    this.totalOutstanding = +this.totalActual - +this.totalPaid;

    this.backlog = this.model.workItems.filter(x => x.tags.includes("#backlog"));
    this.inProgress = this.model.workItems.filter(x => x.tags.includes("#inProgress"));
    this.review = this.model.workItems.filter(x => x.tags.includes("#review"));
    this.complete = this.model.workItems.filter(x => x.tags.includes("#complete"));
  }

  AddWorkItem(items: number): void {
    let newItem = new WorkItem();
    newItem.workProjectId = this.model.id;
    switch (items) {
      case 0:
        newItem.tags = "#backlog";
        this.service.CreateModel("Work/items", newItem).subscribe((response) => {
          this.backlog.push(response);
        });
        break;
      case 1:
        newItem.tags = "#inProgress";
        this.service.CreateModel("Work/items", newItem).subscribe((response) => {
          this.inProgress.push(response);
        });
        break;
      case 2:
        newItem.tags = "#review";
        this.service.CreateModel("Work/items", newItem).subscribe((response) => {
          this.review.push(response);
        });
        break;
    }
  }

  dropWorkItem(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.model.workItems, event.previousIndex, event.currentIndex);
  }

  // Move WorkItem to another Container:
  drop(event: CdkDragDrop<any[]>, tag: string) {
    if (event.previousContainer === event.container) {
      event.item.data.tags = "#" + tag;
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      // TODO: Add Priority to the WorkItem Model:
      // Let Drag order become Priority
    } else {
      event.item.data.tags = "#" + tag;
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    event.item.data = this.UpdateWorkItem(event.item.data);
    
    this.ReportHours(true);
  }

  CreateNewWorkItem(item: WorkItem): WorkItem {
    this.service.CreateModel("Work/items", item).subscribe((response) => {
      console.log(response);
      return response;
    });

    return item;
  }

  UpdateWorkItem(item: WorkItem): WorkItem {
    this.service.UpdateModel("Work/items/" + item.id, item).subscribe((response) => {
      console.log(response);
      this.ReportHours(true);
      return response;
    });

    return item;
  }

  DeleteWorkItem(item: WorkItem, list: WorkItem[]): void {
    this.service.DeleteModel("Work/items/" + item.id).subscribe((response) => {
      console.log(item.name + "deleted...");
      let index = list.indexOf(item);
      list = list.splice(index, 1);
      this.ReportHours(true);
    });
  }

  WorkItemUpdated(item: WorkItem) {
    this.ReportHours(true);
  }

  EditWorkItem(item: WorkItem): void {

  }

}
