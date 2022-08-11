import { Component, OnInit } from '@angular/core';
import { Hud } from '../../models/hud';

@Component({
  selector: 'app-huds',
  templateUrl: './huds.component.html',
  styleUrls: ['./huds.component.css']
})
export class HudsComponent implements OnInit {

  constructor() { }

  public model: Hud = new Hud();

  ngOnInit(): void {
  }

}
