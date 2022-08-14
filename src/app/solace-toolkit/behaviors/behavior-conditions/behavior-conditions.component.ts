import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { SolacetkSearchSheetComponent } from '../../common/solacetk-search-sheet/solacetk-search-sheet.component';
import { BehaviorCondition } from '../../models/behaviorcondition';
import { SoltkKeyValue } from '../../models/soltk-key-value';

@Component({
  selector: 'app-behavior-conditions',
  templateUrl: './behavior-conditions.component.html',
  styleUrls: ['./behavior-conditions.component.css']
})
export class BehaviorConditionsComponent implements OnInit {

  constructor() { }


  public model: BehaviorCondition = new BehaviorCondition();


  ngOnInit(): void {
  }

  dropConditions(event: CdkDragDrop<BehaviorCondition[]>) {
    moveItemInArray(this.model.keys, event.previousIndex, event.currentIndex);
  }

  public AddCondition()
  {
    if (!this.model.keys) this.model.keys = [];
    this.model.keys = [...this.model.keys, new SoltkKeyValue()];
  }

  public GetKeyIndex(key: SoltkKeyValue): number {
    return this.model.keys.indexOf(key);
  }

}
