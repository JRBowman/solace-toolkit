import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'solacetk-paged-panel',
  templateUrl: './solacetk-paged-panel.component.html',
  styleUrls: ['./solacetk-paged-panel.component.css']
})
export class SolacetkPagedPanelComponent implements OnInit {

  constructor() {}

  @Input() model: any[] = [];
  @Output() modelChange = new EventEmitter<any[]>();

  @Input() panelName: string = "Panel";
  @Input() panelType: string = "panel";
  @Input() panelElevation: string = "2";
  @Input() panelColor: string = "#403080";
  @Output() panelColorChange = new EventEmitter<string>();

  @Input() unitWidth: string = "auto";
  @Input() unitHeight: string = "auto";

  @Input() panelClass: string = "";
  @Input() panelIcon: string = "data_object";
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.createPageEvent(this.pageIndex, 0, 10);

    this.selectedChange.subscribe((value) => {
      this.createPageEvent(this.pageIndex);
    });
  }

  ngAfterViewInit(): void {
    this.createPageEvent();
  }

  public RemoveState(behavior: any): void {
    this.model.splice(this.model.indexOf(behavior), 1);
    this.model = [...this.model];
    //this.model.name = this.model.name;
    this.modelChange.emit(this.model);

    
    //this.model.nextStates = this.model.nextStates ? [...this.model.nextStates] : [];
  }

  public pageEvent?: PageEvent;
  public length = 10;
  public pageSize = 10;
  public pageIndex: number = 0;

  public viewData: any[] = [];

  handlePageEvent(e: PageEvent) {
    console.log(e);
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    let start = this.pageIndex * this.pageSize;

    this.viewData = this.model.slice(start, start + this.pageSize);
  }

  private createPageEvent(index: number = 0, length: number = 0, size: number = 25): void {
    let pe = new PageEvent();

    pe.length = this.model.length;

    pe.pageIndex = length > size ? index : 0;
    pe.pageSize = size;

    this.handlePageEvent(pe);
  }

}
