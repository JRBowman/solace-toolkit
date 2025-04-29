import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorAnimationFrame } from 'src/app/solace-toolkit/models/behavior-animation-frame';
import { BehaviorAnimationData } from 'src/app/solace-toolkit/models/behavioranimation';

@Component({
  selector: 'frame-editor',
  templateUrl: './frame-editor.component.html',
  styleUrls: ['./frame-editor.component.css']
})
export class FrameEditorComponent {

  @Input() model: BehaviorAnimationFrame = new BehaviorAnimationFrame();
  @Output() modelChange = new EventEmitter<BehaviorAnimationFrame>();
}
