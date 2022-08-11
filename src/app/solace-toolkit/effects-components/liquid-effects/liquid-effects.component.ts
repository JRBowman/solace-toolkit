import { Component, OnInit } from '@angular/core';
import { Liquideffect } from '../../models/liquideffect';

@Component({
  selector: 'app-liquid-effects',
  templateUrl: './liquid-effects.component.html',
  styleUrls: ['./liquid-effects.component.css']
})
export class LiquidEffectsComponent implements OnInit {

  constructor() { }

  public model: Liquideffect = new Liquideffect();

  ngOnInit(): void {
  }

}
