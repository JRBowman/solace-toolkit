import { Component, OnInit } from '@angular/core';
import { Hudmenu } from '../../models/hudmenu';

@Component({
  selector: 'app-hud-menus',
  templateUrl: './hud-menus.component.html',
  styleUrls: ['./hud-menus.component.css']
})
export class HudMenusComponent implements OnInit {

  constructor() { }

public model: Hudmenu = new Hudmenu();

  ngOnInit(): void {
  }

}
