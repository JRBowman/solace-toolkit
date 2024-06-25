import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'solacetk-markdown-panel',
  templateUrl: './solacetk-markdown-panel.component.html',
  styleUrls: ['./solacetk-markdown-panel.component.css']
})
export class SolacetkMarkdownPanelComponent implements OnInit {

  constructor() {}

  @Input() source: string = "";
  @Input() data: string = "";
  @Output() dataChange = new EventEmitter<string>();

  @Input() mdLanguage: string = "javascript";

  @Input() useData: boolean = false;
  @Input() useLanguage: boolean = false;

  @Input() disableSanitizer: boolean = false;

  @Input() mode: number = 0;

  @Input() dataLoad = new EventEmitter<string>();

  @Input() canEdit: boolean = false;

  public changed: boolean = false;
  public originalData: string = "";

  ngOnInit(): void {

    this.dataLoad.subscribe((value) => {

    // Loaded:
    this.originalData = this.data;
    });


  }

  public ApplyChanges(): void {
    this.dataChange.emit(this.data);
  }

  public RevertChanges(): void {
    this.data = this.originalData;
  }

}
