import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SolacetkSearchSheetComponent } from '../../common/solacetk-search-sheet/solacetk-search-sheet.component';
import { ActionEvent } from '../../models/actionevent';

@Component({
  selector: 'app-action-events',
  templateUrl: './action-events.component.html',
  styleUrls: ['./action-events.component.css']
})
export class ActionEventsComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  public model: ActionEvent = new ActionEvent();

  ngOnInit(): void {
  }


  public openConditionsSheet()
  {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData('Behaviors/conditions');

    instance.instance.modelsSelected.subscribe((models) => 
    {
      this.model.conditions = models;
    });
    
  }


}
