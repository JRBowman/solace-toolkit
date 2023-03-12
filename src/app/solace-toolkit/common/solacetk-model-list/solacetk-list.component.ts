import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { SolacetkService } from '../../services/solacetk-service.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'solacetk-model-list',
  templateUrl: './solacetk-list.component.html',
  styleUrls: ['./solacetk-list.component.css']
})
export class SolaceTKListComponent implements OnInit, AfterViewInit {

  public dataStruct: any[] = [];
  public viewData: any[] = [];
  public filteredData: any[] = [];

  @Input() moduleName: string = "Solace TK Module";
  @Input() modelUri: string = "Controllers/movables";
  @Input() tagFilters: string = "";
  @Input() hideEditorHeading: boolean = true;
  @Input() collapseCoreEditor: boolean = false;
  @Input() queryParameters: string = "";

  @Input() moduleColor: string = "#606060";

  @Input() model!: any;
  @Output() modelChange = new EventEmitter<any>();

  @Output() modelCreate = new EventEmitter();
  @Output() modelClosed = new EventEmitter();
  @Output() modelSaved = new EventEmitter();
  @Output() modelLoaded = new EventEmitter();

  constructor(public service: SolacetkService) { }

  public IsLoading = true;
  public modelSelected: boolean = false;
  public tabIndex: number = 0;

  public moduleIcon: string = "";
  public IsNewModel = false;

  ngOnInit(): void {
    this.moduleIcon = this.moduleName.replace(' ', '').toLowerCase() + ".png";
    
  }

   ngAfterViewInit(): void {
    this.RefreshView();
  }

  public RefreshView() {
    this.IsLoading = true;

    this.service.GetModels(this.modelUri, false, this.tagFilters, this.queryParameters).subscribe(response => {
      this.dataStruct = [];
      this.dataStruct = response;
      //this.filteredData = this.dataStruct;
      this.IsLoading = false;
      this.length = this.dataStruct.length;
      let pe = new PageEvent();
      pe.length = this.length;
      pe.pageIndex = 0;
      pe.pageSize = this.pageSize;
      
      console.log(this.dataStruct);
      this.filteredData = this.dataStruct;
      this.handlePageEvent(pe);
    });
  }

  public LoadModel(model: any) {
    this.model = model;
    this.IsNewModel = false;
    this.modelSelected = true;
    this.modelChange.emit(this.model);
    this.modelLoaded.emit();
    this.tabIndex = 1;
  }

  public saveResponse: string = "";
  public IsSaving: boolean = false;
  public SaveModel() {
    this.IsSaving = true;
    if (this.IsNewModel) {
      this.Create();
      this.model.tags += this.tagFilters;
      this.service.CreateModel(this.modelUri, this.model).subscribe((response) => {
        this.model = response;
        this.modelChange.emit(this.model);
        this.IsSaving = false;
        this.modelSaved.emit();
        this.dataStruct.push(response);
        this.IsNewModel = false;
      });

      return;
    }
    this.Save();
    this.service.UpdateModel(this.modelUri + "/" + this.model.id, this.model).subscribe((response) => {
      this.model = response;
      this.modelChange.emit(this.model);
      this.IsSaving = false;
      this.modelSaved.emit();
    });
  }

  public DeleteModel(model: any): void {
    this.service.DeleteModel(this.modelUri + "/" + model.id).subscribe((response) => {
      //this.model = response;
      this.modelChange.emit(this.model);
      this.IsSaving = false;
      this.dataStruct.splice(this.dataStruct.indexOf(model), 1);
      this.modelSaved.emit();
    });
  }

  public ExportModel() {
    window.location.href = (this.service.baseUrl + this.modelUri + "/" + this.model.id + "/export");
  }

  public NewModel() {
    this.IsNewModel = true;
    this.modelChange.emit({});
    this.modelCreate.emit();
    this.modelSelected = true;
    this.tabIndex = 1;
  }

  public CloseModel() {
    this.model = null;
    this.tabIndex = 0;
    this.modelSelected = false;
    this.modelClosed.emit();
  }

  public Load(): void { }
  public Create(): void { }
  public Save(): void { }
  public Refresh(): void { }
  public Close(): void { }

  public filter(tags: string[]): any[] {
    this.filteredData = this.dataStruct.filter(model => model.tags.includes(this.tagFilters));

    let pe = new PageEvent();
    pe.length = this.filteredData.length;
    pe.pageIndex = 0;
    pe.pageSize = this.pageSize;

    this.handlePageEvent(pe);
    return this.filteredData;
  }

  public clickFilter(tag: string): void {
    this.tagFilters = this.tagFilters + tag;
  }

  public pageEvent?: PageEvent;
  public length = 50;
  public pageSize = 10;
  public pageIndex = 0;

  handlePageEvent(e: PageEvent) {
    console.log(e);
    this.viewData = [];
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    let start = this.pageIndex  * this.pageSize;

    this.viewData = this.filteredData.slice(start, start + this.pageSize);
  }

}
