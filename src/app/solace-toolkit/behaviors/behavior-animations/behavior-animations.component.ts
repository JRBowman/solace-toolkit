import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SolacetkBottomSheetComponent } from '../../common/solacetk-bottom-sheet/solacetk-bottom-sheet.component';
import { BehaviorAnimation, BehaviorAnimationData } from '../../models/behavioranimation';
import { BehaviorState } from '../../models/behaviorstate';
import { SoltkKeyValue } from '../../models/soltk-key-value';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'app-behavior-animations',
  templateUrl: './behavior-animations.component.html',
  styleUrls: ['./behavior-animations.component.css']
})
export class BehaviorAnimationsComponent implements OnInit {

  constructor(private service: SolacetkService, private _bottomSheet: MatBottomSheet) { }

  public model: BehaviorAnimation = new BehaviorAnimation();

  public unloadModules = new EventEmitter<boolean>();

  public editorState: SolTkEditorState = SolTkEditorState.List;
  public animEditorDisabled: boolean = false;

  ngOnInit(): void {
    //this.unloadModules.emit(false);

  }

  LoadAnim(): void {
    this.editorState = SolTkEditorState.Update;
    this.animEditorDisabled = false;
    this.unloadModules.emit(false);
  }

  CreateAnim(): void {
    this.editorState = SolTkEditorState.Create;
    this.animEditorDisabled = true;
    this.model = new BehaviorAnimation();
    this.model.startFrameData = new BehaviorAnimationData();
    this.model.actFrameData = new BehaviorAnimationData();
    this.model.endFrameData = new BehaviorAnimationData();
    this.unloadModules.emit(true);
  }

  CloseAnim(): void {
    this.editorState = SolTkEditorState.List;
    this.unloadModules.emit(true);
  }

  CreateState(): void {
    let state = new BehaviorState();
    state.animation.id = this.model.id;
    state.description = this.model.description;
    state.name = this.model.name;
    state.runCount = 1;
    state.interruptable = true;
    state.tags = this.model.tags;

    this.service.CreateModel("Behaviors/States", state).subscribe(x => {
      console.log(x);
    });
  }

  ImportAseAnimsByTags(): void {
    console.log("Mass Import");
    let instance = this._bottomSheet.open(SolacetkBottomSheetComponent);
  }

  // public onGetStateData(event: SoltkKeyValue[]) {
  //   console.log(event);
  //   let ind = 0;
  //     //this.selectedFrame.downstreamData = [...this.selectedFrame.downstreamData, ...event];
  //     event.forEach(pair => {
  //       if ((ind = this.selectedFrame.downstreamData.findIndex(x => x.key == pair.key)) == -1) {
  //         // Doesn't Exist, add it:
  //         this.selectedFrame.downstreamData = [...this.selectedFrame.downstreamData, pair];
  //       }
  //       // Data already exists
  //       else {
  //         this.selectedFrame.downstreamData[ind].data = pair.data;
  //       }
  //     });
  // }

  importAseAnims(event: any) {
    let files: File[] = []
    files = event.target.files;
    console.log(files);

    if (files.length > 0) {
      for (var x = 0; x < files.length; x++) {

        let tempName = files[x].name.replace(".ase", "");

        const formData = new FormData();
        formData.append(tempName + "-act.ase", files[x]);
        const upload$ = this.service.CreateModel("Files/ase", formData);
  
        upload$.subscribe((response) => {
          console.log("Multiple File Uploads Responses");
          console.log(response);
        });

        // Create BehaviorAnimation for Ase:
        let tmpAnim: BehaviorAnimation = new BehaviorAnimation();
        tmpAnim.name = tempName;
        tmpAnim.tags = "#anim";

        let animCreate = this.service.CreateModel("Behaviors/animations", tmpAnim);

        animCreate.subscribe((response) => {
          console.log(response);
        });
      }

      this.LoadAnim();
    }
  }


}

export enum SolTkEditorState
{
  List = 0,
  Create = 1,
  Update = 2
}
