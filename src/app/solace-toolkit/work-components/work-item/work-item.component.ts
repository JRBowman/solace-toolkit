import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { WorkItemSheetEditorComponent } from './work-item-sheet-editor/work-item-sheet-editor.component';

@Component({
  selector: 'work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.css']
})
export class WorkItemComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  @Input() model: any = {};
  @Output() modelChange = new EventEmitter<any>();
  @Output() modelDelete = new EventEmitter<any>();

  ngOnInit(): void {
  }

  public openWorkItemEditor() {
    let instance = this._bottomSheet.open(WorkItemSheetEditorComponent);
    instance.instance.LoadData(this.model);

    instance.afterDismissed().subscribe((model) => 
    {
      this.model = model;
      this.modelChange.emit(this.model);
    });
    
  }

  public deleteWorkItem(): void {
    this.modelDelete.emit(this.model);
  }

}
