import { Component, OnInit } from '@angular/core';
import { BehaviorAnimation } from '../../models/behavioranimation';

@Component({
  selector: 'app-behavior-animations',
  templateUrl: './behavior-animations.component.html',
  styleUrls: ['./behavior-animations.component.css']
})
export class BehaviorAnimationsComponent implements OnInit {

  constructor() { }

  public model: BehaviorAnimation = new BehaviorAnimation();

  ngOnInit(): void {
  }

}
