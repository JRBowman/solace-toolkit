import { Component, OnInit } from '@angular/core';
import { MovableController } from '../../models/movablecontroller';

@Component({
  selector: 'app-navigation-controllers',
  templateUrl: './navigation-controllers.component.html',
  styleUrls: ['./navigation-controllers.component.css']
})
export class NavigationControllersComponent implements OnInit {

  constructor() { }

  public model: MovableController = new MovableController();

  ngOnInit(): void {
  }

}
