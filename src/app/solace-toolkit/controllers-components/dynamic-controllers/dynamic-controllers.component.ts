import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-controllers',
  templateUrl: './dynamic-controllers.component.html',
  styleUrls: ['./dynamic-controllers.component.css']
})
export class DynamicControllersComponent implements OnInit {

  constructor() { }

  public model: any;

  public worldLocation: string = "0,0,0";

  ngOnInit(): void {
  }

}
