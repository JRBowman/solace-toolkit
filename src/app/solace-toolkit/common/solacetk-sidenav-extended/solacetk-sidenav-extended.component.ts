import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'solacetk-sidenav-extended',
  templateUrl: './solacetk-sidenav-extended.component.html',
  styleUrls: ['./solacetk-sidenav-extended.component.css']
})
export class SolacetkSidenavExtendedComponent implements OnInit{


  public toolNavStyle = "top-nav mat-elevation-z2";
  public toolNavColor = "accent";

  constructor() { }

  ngOnInit(): void {
  }
  
}
