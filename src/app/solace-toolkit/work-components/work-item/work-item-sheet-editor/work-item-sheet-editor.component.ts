import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BehaviorAnimationData } from 'src/app/solace-toolkit/models/behavioranimation';
import { WorkItemArtifact } from 'src/app/solace-toolkit/models/work-item-artifact';
import { WorkComment } from 'src/app/solace-toolkit/models/workcomment';
import { WorkItem } from 'src/app/solace-toolkit/models/workitem';
import { SolacetkService } from 'src/app/solace-toolkit/services/solacetk-service.service';

@Component({
  selector: 'app-work-item-sheet-editor',
  templateUrl: './work-item-sheet-editor.component.html',
  styleUrls: ['./work-item-sheet-editor.component.css']
})
export class WorkItemSheetEditorComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<WorkItemSheetEditorComponent>, private service: SolacetkService) { }

  public model: WorkItem = new WorkItem();
  public IsLoading: boolean = true;

  public unloadModules = new EventEmitter<boolean>();

  public anim: BehaviorAnimationData = new BehaviorAnimationData();

  public selectedComment: WorkComment = new WorkComment();

  ngOnInit(): void {
  }

  public LoadData(data: WorkItem) {
    if (data == null) return;

    this.model = data;
    this.anim.name = this.model.name;
    this.IsLoading = false;
  }

  public Save() {

    if (this.model.artifact == null) this.model.artifact = new WorkItemArtifact();
    this.model.artifact.artifactUrl = this.anim.framesSheet;

    this.service.UpdateModel("Work/items/" + this.model.id, this.model).subscribe((response) => {
      this.model = response;
    });
    this.Close();
  }
  
  
  public Close() {
    this._bottomSheetRef.dismiss(this.model);
    this.model = new WorkItem();
    this.IsLoading = true;
  }

  public AddComment() {
    if (!this.model.comments) this.model.comments = [];
    this.model.comments = [...this.model.comments, this.selectedComment];
    this.selectedComment = new WorkComment();
  }

}
