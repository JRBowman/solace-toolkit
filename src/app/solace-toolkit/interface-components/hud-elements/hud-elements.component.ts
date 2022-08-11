import { Component, OnInit } from '@angular/core';
import { Hudelement } from '../../models/hudelement';

@Component({
  selector: 'app-hud-elements',
  templateUrl: './hud-elements.component.html',
  styleUrls: ['./hud-elements.component.css']
})
export class HudElementsComponent implements OnInit {

  constructor() { }

  public model: Hudelement = new Hudelement();

  ngOnInit(): void {
  }

}
