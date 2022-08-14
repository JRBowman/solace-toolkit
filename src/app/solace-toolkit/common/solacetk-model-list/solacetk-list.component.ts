import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'solacetk-model-list',
  templateUrl: './solacetk-list.component.html',
  styleUrls: ['./solacetk-list.component.css']
})
export class SolaceTKListComponent implements OnInit, AfterViewInit {

  public dataStruct: any[] = [];
  public filteredData: any[] = [];

  @Input() moduleName: string = "Solace TK Module";
  @Input() modelUri: string = "Controllers/movables";
  @Input() tagFilters: string = "";

  @Input() model!: any;
  @Output() modelChange = new EventEmitter<any>();

  @Output() modelCreate = new EventEmitter();
  @Output() modelClosed = new EventEmitter();
  @Output() modelSaved = new EventEmitter();
  @Output() modelLoaded = new EventEmitter();

  constructor(private service: SolacetkService) { }

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

    this.service.GetModels(this.modelUri, true, this.tagFilters).subscribe(response => {
      this.dataStruct = [];
      this.dataStruct = response;
      this.filteredData = this.dataStruct;
      this.IsLoading = false;
    });
  }

  public LoadModel(model: any) {
    console.log(model);
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
    //this.selectedModel = model;
    this.IsSaving = true;
    console.log(this.model);
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
    this.service.DeleteModel(this.modelUri + "/" + this.model.id).subscribe((response) => {
      this.model = response;
      this.modelChange.emit(this.model);
      this.IsSaving = false;
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
    this.model = {};
    this.tabIndex = 0;
    this.modelSelected = false;
    this.modelClosed.emit();
    console.log(this.model);
  }

  public Load(): void {

  }
  public Create(): void {

  }
  public Save(): void { }
  public Refresh(): void { }
  public Close(): void { }


  applyFilter(filterValue: string) {

  }

  public filter(tags: string[]): any[] {
    console.log(tags);
    this.filteredData = this.dataStruct.filter(model => model.tags.includes(this.tagFilters));
    return this.filteredData;
  }

  public clickFilter(tag: string): void {
    console.log(tag);
    this.tagFilters = this.tagFilters + tag;
  }

}
