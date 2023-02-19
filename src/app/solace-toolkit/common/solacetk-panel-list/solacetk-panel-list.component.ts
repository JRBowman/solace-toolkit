import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatChipListboxChange } from '@angular/material/chips';

@Component({
  selector: 'solacetk-panel-list',
  templateUrl: './solacetk-panel-list.component.html',
  styleUrls: ['./solacetk-panel-list.component.css']
})
export class SolacetkPanelListComponent implements OnInit {

  constructor() { }

  @Input() panelType: string = "panel";
  @Input() panelIcon: string = "hub";
  @Input() panelName: string = "panel";

  @Input() unitWidth: any = "auto";
  @Input() unitHeight: any = "auto";

  @Input() fontSize: string = "normal";

  @Input() panelColor: string = "#006064";

  @Input() overflowMethod: string = "hidden";

  @Input() model: any[] = [];
  @Output() modelChange = new EventEmitter<any[]>();

  @Input() selectedInstance: any = {};
  @Output() selectedInstanceChange = new EventEmitter<any>();

  @Input() showActions: boolean = false;

  public showEditor: boolean = false;

  ngOnInit(): void {
  }

  public addInstance()
  {
    if (!this.model) this.model = [];
    this.model = [...this.model, {}];
    this.modelChange.emit(this.model);
  }

  public onInstanceSelect(instance: any){
    this.selectedInstance = instance;
    this.showEditor = true;
    this.selectedInstanceChange.emit(this.selectedInstance);
  }

  public onInstanceChange(event: MatChipListboxChange) {
    if (!event || event.value == undefined) {
      this.onInstanceSelect(null);
      this.showEditor = false;
    }
  }

}
