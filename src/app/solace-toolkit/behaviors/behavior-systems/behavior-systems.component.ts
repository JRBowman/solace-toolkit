import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SolacetkSearchSheetComponent } from '../../common/solacetk-search-sheet/solacetk-search-sheet.component';
import { BehaviorSystem, BehaviorType } from '../../models/behaviorsystem';

@Component({
  selector: 'app-behavior-systems',
  templateUrl: './behavior-systems.component.html',
  styleUrls: ['./behavior-systems.component.css']
})
export class BehaviorSystemsComponent implements OnInit {


constructor(private _bottomSheet: MatBottomSheet) { }

public model: BehaviorSystem = new BehaviorSystem();

  ngOnInit(): void {
    this.behaviorTypes = Object.keys(BehaviorType).filter(f => !isNaN(Number(f)));
  }

  public behaviorTypes: any[] = [];
  public selectedBehavior: string = "";

  public behavior = BehaviorType;

  public GetBehaviorType(item: string): string
  {
    this.selectedBehavior = BehaviorType[Number.parseInt(item)];
    return this.selectedBehavior;
  }

  dropBranches(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.model.branches, event.previousIndex, event.currentIndex);
  }

  public openBranchesSheet()
  {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData('Behaviors/branches');

    instance.instance.modelsSelected.subscribe((models) => 
    {
      this.model.branches = models;
    });
    
  }

}
