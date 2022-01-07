import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-js',
  templateUrl: './overview-js.component.html',
  styleUrls: ['./overview-js.component.css']
})
export class OverviewJsComponent implements OnInit {

  constructor() { }

  public step = 0;

  ngOnInit(): void {
  }

  public setStep(index: number) {
    this.step = index;
  }

  public nextStep() {
    this.step++;
  }

  public prevStep() {
    this.step--;
  }

}
