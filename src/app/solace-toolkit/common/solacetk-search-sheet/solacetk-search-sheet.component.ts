import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListOption } from '@angular/material/list';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'app-solacetk-search-sheet',
  templateUrl: './solacetk-search-sheet.component.html',
  styleUrls: ['./solacetk-search-sheet.component.css']
})
export class SolacetkSearchSheetComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<SolacetkSearchSheetComponent>, private service: SolacetkService) { }

  public models: any[] = new Array<any>();
  public selectedModels: any[] = new Array<any>();
  @Input() resource: string = "";

  public IsLoading: boolean = true;

  @Output() modelsSelected = new EventEmitter<any[]>();

  ngOnInit(): void {
    
  }

  public LoadData(resoureUri: string) {
    this.resource = resoureUri;
    this.service.GetModels(resoureUri).subscribe((model) => {
      this.models = model;
      console.log(model);
      this.IsLoading = false;
    });
  }

  public Close() {
    this._bottomSheetRef.dismiss(this.selectedModels);
  }

  public Add(models: MatListOption[]) {

    models.forEach(e => {
      this.selectedModels.push(e.value);
    });

    this.modelsSelected.emit(this.selectedModels);
    console.log(this.selectedModels);

    this.Close();
  }

  

}
