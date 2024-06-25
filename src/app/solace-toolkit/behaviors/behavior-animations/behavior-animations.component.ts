import { HttpClient } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SolacetkBottomSheetComponent } from '../../common/solacetk-bottom-sheet/solacetk-bottom-sheet.component';
import { BehaviorAnimationFrame } from '../../models/behavior-animation-frame';
import { BehaviorAnimation, BehaviorAnimationData } from '../../models/behavioranimation';
import { BehaviorState } from '../../models/behaviorstate';
import { SoltkKeyValue } from '../../models/soltk-key-value';
import { SolacetkService } from '../../services/solacetk-service.service';
import { SolTkComponent } from '../../models/soltk-component';

@Component({
  selector: 'app-behavior-animations',
  templateUrl: './behavior-animations.component.html',
  styleUrls: ['./behavior-animations.component.css']
})
export class BehaviorAnimationsComponent implements OnInit {

  constructor(private service: SolacetkService, private _bottomSheet: MatBottomSheet) { }

  public model: BehaviorAnimation = new BehaviorAnimation();
  public selectedFrame?: BehaviorAnimationFrame;
  public selectedComponent?: SolTkComponent;

  public unloadModules = new EventEmitter<boolean>();

  public editorState: SolTkEditorState = SolTkEditorState.List;
  public animEditorDisabled: boolean = false;

  ngOnInit(): void {
    //this.unloadModules.emit(true);

  }

  LoadAnim(): void {

    this.animEditorDisabled = false;
    this.unloadModules.emit(false);
    this.editorState = SolTkEditorState.Update;
  }

  CreateAnim(): void {
    this.editorState = SolTkEditorState.Create;
    this.animEditorDisabled = true;
    this.model = new BehaviorAnimation();
    this.model.actFrameData = new BehaviorAnimationData();
    this.unloadModules.emit(true);
  }

  CloseAnim(): void {
    this.unloadModules.emit(true);
    this.selectedComponent = undefined;
    this.selectedFrame = undefined;
    this.editorState = SolTkEditorState.List;
  }

  CreateState(): void {
    let state = new BehaviorState();
    state.animation.id = this.model.id;
    state.description = this.model.description;
    state.name = this.model.name;
    state.runCount = 1;
    state.interruptable = true;
    state.stateType = "State";
    state.tags = this.model.tags;

    this.service.CreateModelOp("Behaviors/States", state).subscribe(x => {
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

  public getComponentVariableData(): void {
    if (!this.selectedFrame || !this.selectedComponent) return;

    //this.model.components.forEach(component => {
      // Collect Component Values into SolTkKeyValues:
      this.mergeFrameData({ key: this.selectedComponent.name + ".positionX", data: this.selectedComponent.positionX.toString(), operator: 0 });
      this.mergeFrameData({ key: this.selectedComponent.name + ".positionY", data: this.selectedComponent.positionY.toString(), operator: 0 });
      this.mergeFrameData({ key: this.selectedComponent.name + ".positionZ", data: this.selectedComponent.positionZ.toString(), operator: 0 });
      this.mergeFrameData({ key: this.selectedComponent.name + ".scaleX", data: this.selectedComponent.scaleX.toString(), operator: 0 });
      this.mergeFrameData({ key: this.selectedComponent.name + ".scaleY", data: this.selectedComponent.scaleY.toString(), operator: 0 });
      this.mergeFrameData({ key: this.selectedComponent.name + ".scaleZ", data: this.selectedComponent.scaleZ.toString(), operator: 0 });
      this.mergeFrameData({ key: this.selectedComponent.name + ".rotationX", data: this.selectedComponent.rotationX.toString(), operator: 0 });
      this.mergeFrameData({ key: this.selectedComponent.name + ".rotationY", data: this.selectedComponent.rotationY.toString(), operator: 0 });
      this.mergeFrameData({ key: this.selectedComponent.name + ".rotationZ", data: this.selectedComponent.rotationZ.toString(), operator: 0 });
      this.mergeFrameData({ key: this.selectedComponent.name + ".enabled", data: this.selectedComponent.enabled.toString(), operator: 0 });

      this.selectedFrame.downstreamData = [...this.selectedFrame.downstreamData];
    //});
  }

  public mergeFrameData(model: SoltkKeyValue): void {
    if (!this.selectedFrame) return;

    let index = this.selectedFrame.downstreamData.findIndex(x => x.key == model.key);
    if (index == -1) {
      // Doesn't Exist, add it:
      console.log("adding new frame data");
      
      this.selectedFrame.downstreamData = [...this.selectedFrame.downstreamData, model];
      console.log(this.selectedFrame.downstreamData);
    }
    // Data already exists
    else {
      this.selectedFrame.downstreamData[index].data = model.data;
    }


  }

  public cleanAllFrameNames(): void {
    if (!this.model || !this.model.actFrameData) return;

    this.model.actFrameData.frames.forEach(frame => {
      frame.name = this.cleanFrameName(frame.name);
    });
  }

  public cleanFrameName(name: string): string {
    return name.replace(".ase", "").trim().replace(" ", "_");
  }

  importAseAnims(event: any) {
    let files: File[] = []
    files = event.target.files;
    console.log(files);

    if (files.length > 0) {
      for (var x = 0; x < files.length; x++) {

        let tempName = files[x].name.replace(".ase", "");

        const formData = new FormData();

        //formData.append(tempName + "-act.ase", files[x]);
        formData.append(files[x].name, files[x]);
        const upload$ = this.service.CreateModel("Files/ase", formData);

        upload$.subscribe((response) => {
          console.log("Multiple File Uploads Responses");
          console.log(response);
        });

        // Create BehaviorAnimation for Ase:
        let tmpAnim: BehaviorAnimation = new BehaviorAnimation();
        tmpAnim.name = tempName;
        tmpAnim.actFrameData = new BehaviorAnimationData();
        tmpAnim.actFrameData.name = tempName + "-act";
        tmpAnim.actFrameData.enabled = true;
        tmpAnim.actFrameData.id = 0;
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

export enum SolTkEditorState {
  List = 0,
  Create = 1,
  Update = 2
}
