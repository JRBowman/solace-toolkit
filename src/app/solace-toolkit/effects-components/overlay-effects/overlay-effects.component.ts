import { Component, OnInit } from '@angular/core';
import { Overlayeffect } from '../../models/overlayeffect';

@Component({
  selector: 'app-overlay-effects',
  templateUrl: './overlay-effects.component.html',
  styleUrls: ['./overlay-effects.component.css']
})
export class OverlayEffectsComponent implements OnInit {

  constructor() { }

  public model: Overlayeffect = new Overlayeffect();

  ngOnInit(): void {
  }

}
