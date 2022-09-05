import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'solacetk-toolnav-extended',
  templateUrl: './solacetk-toolnav-extended.component.html',
  styleUrls: ['./solacetk-toolnav-extended.component.css']
})
export class SolacetkToolnavExtendedComponent implements OnInit {

  @Input() toolbarIntegrated: boolean = false;


  public toolNavStyle = "top-nav mat-elevation-z2";
  public toolNavColor = "accent";

  constructor() { }

  ngOnInit(): void {
    if (this.toolbarIntegrated){
      this.toolNavStyle = "top-nav mat-elevation-z0";
      this.toolNavColor = "primary";
    }
  }

}
