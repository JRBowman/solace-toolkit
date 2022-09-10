import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'app-solacetk-bottom-sheet',
  templateUrl: './solacetk-bottom-sheet.component.html',
  styleUrls: ['./solacetk-bottom-sheet.component.css']
})
export class SolacetkBottomSheetComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<SolacetkBottomSheetComponent>, private service: SolacetkService) { }

  @Input() title: string = "";

  public IsLoading: boolean = true;

  ngOnInit(): void {
  }

  public Close(): void {

  }

}
