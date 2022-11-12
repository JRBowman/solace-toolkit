import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorCondition } from '../../models/behaviorcondition';
import { SoltkKeyValue } from '../../models/soltk-key-value';

@Component({
  selector: 'solacetk-conditions-panel',
  templateUrl: './solacetk-conditions-panel.component.html',
  styleUrls: ['./solacetk-conditions-panel.component.css']
})
export class SolacetkConditionsPanelComponent implements OnInit {

  constructor() { }

  @Input() model: BehaviorCondition = new BehaviorCondition();
  @Output() modelChange = new EventEmitter<BehaviorCondition>();


  ngOnInit(): void {
    if (!this.model) this.model = new BehaviorCondition();
    
  }


}
