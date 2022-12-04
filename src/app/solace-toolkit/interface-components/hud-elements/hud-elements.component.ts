import { Component, OnInit } from '@angular/core';
import { HudElement } from '../../models/hudelement';

@Component({
  selector: 'app-hud-elements',
  templateUrl: './hud-elements.component.html',
  styleUrls: ['./hud-elements.component.css']
})
export class HudElementsComponent implements OnInit {

  constructor() { }

  public model: HudElement = new HudElement();

  ngOnInit(): void {
  }

}
