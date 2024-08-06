import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { SolacetkService } from '../../services/solacetk-service.service';
import { PageEvent } from '@angular/material/paginator';
import { SolaceTkSoundService } from '../../services/solacetk-sounds.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarRef,
  MatSnackBarVerticalPosition,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';
import { SolacetkDevbannerComponent } from '../solacetk-devbanner/solacetk-devbanner.component';
import { SolacetkMenuProviderService } from '../../services/solacetk-menu-provider.service';
import { MatDialogRef } from '@angular/material/dialog';
import { SolacetkDialogComponent } from '../solacetk-dialog/solacetk-dialog.component';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Inject } from '@angular/core';

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
  @Input() textFilterStr: string = "";
  @Input() textFilters: string[] = [];
  @Input() hideEditorHeading: boolean = true;
  @Input() collapseCoreEditor: boolean = false;
  @Input() queryParameters: string = "";
  @Input() indev: boolean = false;
  @Input() hasPreview: boolean = false;
  @Input() modulePlateType: string = "Tk";

  @Input() moduleColor: string = "#606060";

  @Input() model!: any;
  @Output() modelChange = new EventEmitter<any>();

  @Output() modelCreate = new EventEmitter();
  @Output() modelClosed = new EventEmitter();
  @Output() modelSaved = new EventEmitter();
  @Output() modelLoaded = new EventEmitter();

  @Input() moduleData: any = {};
  @Output() moduleDataChange = new EventEmitter<any>();

  @Input() dynamicTabHeight: boolean = false;

  @Input() refreshList = new EventEmitter();

  constructor(public service: SolacetkService, private _snackBar: MatSnackBar, public menuTk: SolacetkMenuProviderService, @Inject(PLATFORM_ID) private platformId: Object//, public soundService: SolaceTkSoundService
  ) { }

  public IsLoading = true;
  public modelSelected: boolean = false;
  public tabIndex: number = 0;

  public moduleIcon: string = "";
  public IsNewModel = false;

  public devBanner?: MatSnackBarRef<SolacetkDevbannerComponent>;

  public saveResponse: string = "";
  public IsSaving: boolean = false;

  public toggleJsonEditor: boolean = false;

  ngOnInit(): void {
    this.moduleIcon = this.moduleName.replace(' ', '').toLowerCase() + ".png";
    this.pageIndex = 0;
    this.RefreshView();

    this.refreshList.subscribe((value) => this.RefreshView());

    //this.modelChange.subscribe((value) => this.RefreshJsonEditor());
  }

  ngOnDestroy(): void {
    if (this.devBanner) this.devBanner.dismiss();
  }

  ngAfterViewInit(): void {
    //this.RefreshView();
    if (this.indev) {
      const horizontalPosition: MatSnackBarHorizontalPosition = 'start';
      const verticalPosition: MatSnackBarVerticalPosition = 'bottom';
      this.devBanner = this._snackBar.openFromComponent(SolacetkDevbannerComponent,
        {
          horizontalPosition: horizontalPosition, verticalPosition: verticalPosition,
          data: { message: "This Module is currently In Development" }
        });
    }
  }

  public GetPreviewUrl(model: any): string {
    model.previewUrl = "/Artifacts/" + model.name + "/" + model.name + ".gif";
    return model.previewUrl;
  }

  public RefreshView() {
    this.IsLoading = true;

    this.service.GetModelsOp(this.modelUri).subscribe({
      next: (response) => {
        //console.log(response);
        this.dataStruct = [];
        this.dataStruct = response.data ?? [];
        // if (this.soundService.IsClient) this.soundService.playAudio("view-refresh.wav");
        this.IsLoading = false;
        this.length = this.dataStruct.length;
        let pe = new PageEvent();
        pe.length = this.length;
        pe.pageIndex = this.pageIndex;
        pe.pageSize = this.pageSize;
        this.filteredData = this.dataStruct;
        this.handlePageEvent(pe);
      },
      error: (e) => this._snackBar.open(e, "X", { duration: 5000 }),
      complete: () => { }
    });

  }

  public LoadModel(model: any) {
    // if (this.soundService.IsClient) this.soundService.playAudio("model-load.wav");
    this.model = model;
    this.IsNewModel = false;
    this.modelSelected = true;
    this.modelChange.emit(this.model);
    this.modelLoaded.emit();
    this.RefreshJsonEditor();
    this.tabIndex = 1;
  }

  public SaveModel() {
    this.IsSaving = true;
    // if (this.soundService.IsClient) this.soundService.playAudio("model-save.wav");
    //console.log(this.model);
    if (this.IsNewModel) {
      this.Create();
      this.model.tags += this.tagFilters;
      this.service.CreateModelOp(this.modelUri, this.model).subscribe({
        next: (response) => {
          this.model = response.data;
          this.modelChange.emit(this.model);
          this.IsSaving = false;
          this.modelSaved.emit();
          this.dataStruct.push(response);
          this.IsNewModel = false;
          this._snackBar.open(this.model.name + " - has been saved.", "X", { duration: 5000 });
        },
        error: (e) => this.LogError(e),
        complete: () => { }
      });

      return;
    }
    this.Save();
    this.service.UpdateModelOp(this.modelUri + "/" + this.model.id, this.model).subscribe({
      next: (response) => {
        this.model = response.data;
        this.modelChange.emit(this.model);
        this.IsSaving = false;
        this.modelSaved.emit();
        this._snackBar.open(this.model.name + " - has been saved.", "X", { duration: 5000 });
      },
      error: (e) => this.LogError(e),
      complete: () => { this.IsSaving = false; this.IsLoading = false; }
    });
  }

  // TODO: Implement Modal / Confirmation before deleting something:
  public DeleteModel(model: any): void {
    this.IsSaving = true;
    this.service.DeleteModelOp(this.modelUri + "/" + model.id).subscribe((response) => {
      //this.model = response;
      this.IsSaving = false;
      this.dataStruct.splice(this.dataStruct.indexOf(model), 1);
      this.modelChange.emit(this.model);
      this.modelSaved.emit();
      this.createPageEvent(this.pageIndex);
      this._snackBar.open(model.name + " - has been deleted.", "X", { duration: 5000 });
    });
  }

  public ExportModel() {
    if (isPlatformBrowser(this.platformId)) window.location.href = (this.service.baseUrl + this.modelUri + "/" + this.model.id + "/export");
    this._snackBar.open(this.model.name + " - has been exported.", "X", { duration: 5000 });
  }

  public NewModel(template?: any) {
    console.log(template);
    // if (this.soundService.IsClient) this.soundService.playAudio("model-new.wav");
    this.IsNewModel = true;
    this.modelChange.emit(template ?? {});
    this.modelCreate.emit();
    this.RefreshJsonEditor();
    this.modelSelected = true;
    this.tabIndex = 1;
  }

  public CloseModel() {
    // if (this.soundService.IsClient) this.soundService.playAudio("model-exit.wav");
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

  // TODO: abstract into a service for notifications:
  // Update for SnackBar action to open a Modal with the Error Details:
  public LogError(e: any): void {
    this.IsLoading = false;
    this.IsSaving = false;
    this._snackBar.open(e.message, "X");
    console.log(e);
  }

  private createPageEvent(index: number = 0, length: number = 0, size: number = 25): void {
    let pe = new PageEvent();

    pe.length = this.filteredData.length;

    pe.pageIndex = length > size ? index : 0;
    pe.pageSize = size;

    this.handlePageEvent(pe);
  }

  public filter(textTags: string[], apply: boolean = true): any[] {
    //this.filteredData = this.textFilter(this.textFilters);
    //if (!this.filteredData || this.filteredData.length == 0) this.filteredData = this.dataStruct;
    if (textTags.length > 0 || this.tagFilters.length > 0) {
      this.filteredData = this.filteredData.filter(model => model.tags.includes(this.tagFilters));
    }
    else this.filteredData = this.textFilter(this.textFilters, false);

    if (apply) this.createPageEvent(this.pageIndex, this.filteredData.length, this.pageSize);
    return this.filteredData;
  }

  public textFilter(textTags: string[], apply: boolean = true): any[] {
    this.filteredData = this.dataStruct;
    console.log(this.dataStruct);
    if (textTags.length > 0 && this.filteredData.length > 0) {
      this.filteredData = this.filteredData.filter(model => textTags.some(t => model.name.toLowerCase().includes(t.toLowerCase())));
    }
    else this.filteredData = this.dataStruct;

    if (this.tagFilters.length > 0) this.filteredData = this.filter([], false);
    if (apply) this.createPageEvent(this.pageIndex, this.filteredData.length, this.pageSize);
    return this.filteredData;
  }

  public clickFilter(tag: string): void {
    this.tagFilters = this.tagFilters + tag;
  }

  public pageEvent?: PageEvent;
  public length = 50;
  public pageSize = 24;
  public pageIndex: number = 0;

  handlePageEvent(e: PageEvent) {
    console.log(e);
    this.viewData = [];
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    let start = this.pageIndex * this.pageSize;

    this.viewData = this.filteredData.slice(start, start + this.pageSize);
  }

  public modelJson: string = "";
  public modelJsonChange = new EventEmitter<string>();
  public RefreshJsonEditor(): void {
    console.log(this.model);
    this.modelJson = JSON.stringify(this.model, undefined, 2);
  }

  public ApplyModel(json: string): void {
    this.model = JSON.parse(json);
    this.RefreshJsonEditor();
    this.modelChange.emit(this.model);
  }

  // TEMP: UI to quickly test and seed data to the API
  private seedDialog?: MatDialogRef<SolacetkDialogComponent>;
  public SeedData(): void {

    this.seedDialog = this.menuTk.OpenSolDialog({}, { title: "Seed Data Options", message: "### Adding Seed Data..." });

    var seedUrl = this.moduleData.moduleSeedData ?? "";
    if (seedUrl == "") return;

    this.service.GetDataFromSource(seedUrl).subscribe((data) => {
      this.NewModel(data);

      setTimeout(() => {
        // Fire the Updates and Save:
        this.SaveModel();
        this.seedDialog?.close();
      }, 1000);
    });
  }

}
