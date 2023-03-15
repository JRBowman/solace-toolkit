import { Component, inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'solacetk-devbanner',
  templateUrl: './solacetk-devbanner.component.html',
  styleUrls: ['./solacetk-devbanner.component.css']
})
export class SolacetkDevbannerComponent implements OnInit {

  ngOnInit(): void {
    
  }

  snackBarRef = inject(MatSnackBarRef);
  dataRef = inject(MAT_SNACK_BAR_DATA);
 
}
