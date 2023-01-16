import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatLegacyListOption as MatListOption } from '@angular/material/legacy-list';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'app-solacetk-search-sheet',
  templateUrl: './solacetk-search-sheet.component.html',
  styleUrls: ['./solacetk-search-sheet.component.css']
})
export class SolacetkSearchSheetComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<SolacetkSearchSheetComponent>, private service: SolacetkService) { }

  public models: any[] = []
  public filteredModels: any[] = [];
  public selectedModels: any[] = [];
  @Input() resource: string = "";

  public IsLoading: boolean = true;
  public selectMultiple: boolean = true;

  @Output() modelsSelected = new EventEmitter<any[]>();

  public tagFilters: string = "";

  ngOnInit(): void {
    
  }

  public LoadData(resoureUri: string, multiple: boolean = true) {
    this.selectedModels = [];
    this.selectMultiple = multiple;
    this.models = [];
    this.resource = "";
    this.resource = resoureUri;
    this.service.GetModels(resoureUri, true).subscribe((model) => {
      this.models = model;
      console.log(model);
      this.IsLoading = false;
    });
  }

  public Close() {
    this._bottomSheetRef.dismiss(this.selectedModels);
    this.selectedModels = [];
    this.models = [];
    this.resource = "";
  }

  public Add(models: MatListOption[]) {

    models.forEach(e => {
      this.selectedModels.push(e.value);
    });

    this.modelsSelected.emit(this.selectedModels);
    console.log(this.selectedModels);

    this.Close();
  }

  public filter(tags: string[]): any[] {
    this.filteredModels = this.models.filter(model => model.tags.includes(this.tagFilters));
    return this.filteredModels;
  }

}
