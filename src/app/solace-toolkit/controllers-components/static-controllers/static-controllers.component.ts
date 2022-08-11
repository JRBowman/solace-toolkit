import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-controllers',
  templateUrl: './static-controllers.component.html',
  styleUrls: ['./static-controllers.component.css']
})
export class StaticControllersComponent implements OnInit {

  constructor() { }

  public model: any;
  
  ngOnInit(): void {
  }

}
