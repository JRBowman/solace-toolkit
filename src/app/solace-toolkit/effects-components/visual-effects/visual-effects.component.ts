import { Component, OnInit } from '@angular/core';
import { Visualeffect } from '../../models/visualeffect';

@Component({
  selector: 'app-visual-effects',
  templateUrl: './visual-effects.component.html',
  styleUrls: ['./visual-effects.component.css']
})
export class VisualEffectsComponent implements OnInit {

  constructor() { }

public model: Visualeffect = new Visualeffect();
  
  ngOnInit(): void {
  }

}
