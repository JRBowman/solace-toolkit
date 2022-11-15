import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SolacetkSearchSheetComponent } from '../../common/solacetk-search-sheet/solacetk-search-sheet.component';
import { ActionEvent } from '../../models/actionevent';
import { BehaviorCondition } from '../../models/behaviorcondition';
import { SoltkKeyValue } from '../../models/soltk-key-value';

@Component({
  selector: 'app-action-events',
  templateUrl: './action-events.component.html',
  styleUrls: ['./action-events.component.css']
})
export class ActionEventsComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { 
  }

  public model: ActionEvent = new ActionEvent();

  public operators: string[] = SoltkKeyValue.operatorValues;

  ngOnInit(): void {

  }


}
