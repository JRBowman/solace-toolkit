import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatChipSelectionChange } from '@angular/material/chips';
import { BehaviorAnimation, BehaviorAnimationData } from '../../models/behavioranimation';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'app-behavior-animations',
  templateUrl: './behavior-animations.component.html',
  styleUrls: ['./behavior-animations.component.css']
})
export class BehaviorAnimationsComponent implements OnInit {

  constructor(private service: SolacetkService) { }

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

}

export enum SolTkEditorState
{
  List = 0,
  Create = 1,
  Update = 2
}
