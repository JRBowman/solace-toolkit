import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SolacetkBottomSheetComponent } from '../../common/solacetk-bottom-sheet/solacetk-bottom-sheet.component';
import { BehaviorAnimationFrame } from '../../models/behavior-animation-frame';
import { BehaviorAnimation, BehaviorAnimationData } from '../../models/behavioranimation';
import { BehaviorState } from '../../models/behaviorstate';
import { SoltkKeyValue } from '../../models/soltk-key-value';
import { SolacetkService } from '../../services/solacetk-service.service';
import { SolTkComponent } from '../../models/soltk-component';
import { SolTkEditorState } from '../behavior-animations/behavior-animations.component';
import { BehaviorAnimationAtlas } from '../../models/behavior-animation-atlas';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-behavior-animation-atlas',
  templateUrl: './behavior-animation-atlas.component.html',
  styleUrls: ['./behavior-animation-atlas.component.css']
})
export class BehaviorAnimationAtlasComponent implements OnInit {
  constructor(private service: SolacetkService, private _bottomSheet: MatBottomSheet) { }
  
  public model: BehaviorAnimation = new BehaviorAnimation();
  public modelChanged = new EventEmitter<BehaviorAnimation>();
  public selectedFrame?: BehaviorAnimationFrame;
  public selectedComponent?: SolTkComponent;

  public unloadModules = new EventEmitter<boolean>();

  public editorState: SolTkEditorState = SolTkEditorState.List;
  public animEditorDisabled: boolean = false;

  // Animation Atlas Fields:
  public atlasModel: BehaviorAnimationAtlas = new BehaviorAnimationAtlas();
  public totalAnims: number = 1;

  public testAnimSheet: string = "";

  public zoomLevel: number = 0.5;

  public currentFrame: BehaviorAnimationFrame = new BehaviorAnimationFrame();

  ngOnInit(): void {
    //this.unloadModules.emit(true);
    this.testAnimSheet = "/Artifacts/pumperkin-atlas/pumperkin-atlas.png"
  }

  LoadAnim(): void {

    this.animEditorDisabled = false;
    this.unloadModules.emit(false);
    this.editorState = SolTkEditorState.Update;

    this.totalAnims = this.atlasModel.animations.length;
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

  public AnimSelectionChanged(event: MatSelectionListChange): void
  {
    var selection = event.options[0].value;
    this.model = this.atlasModel.animations.find(v => v.name == selection.name) ?? new BehaviorAnimation();
    this.modelChanged.emit(this.model);
  }

  public CreateAtlasAnimation(): void {
    var entry = new BehaviorAnimation();
    entry.name = this.atlasModel.name + this.totalAnims;

    this.totalAnims++;
    
    this.atlasModel.animations = [...this.atlasModel.animations, entry];
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
