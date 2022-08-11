import { Component, OnInit } from '@angular/core';
import { Lighteffect } from '../../models/lighteffect';

@Component({
  selector: 'app-light-effects',
  templateUrl: './light-effects.component.html',
  styleUrls: ['./light-effects.component.css']
})
export class LightEffectsComponent implements OnInit {

  constructor() { }

  public model: Lighteffect = new Lighteffect();

  ngOnInit(): void {
  }

}
