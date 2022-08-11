import { Component, OnInit } from '@angular/core';
import { BehaviorState } from '../../models/behaviorstate';

@Component({
  selector: 'app-behavior-states',
  templateUrl: './behavior-states.component.html',
  styleUrls: ['./behavior-states.component.css']
})
export class BehaviorStatesComponent implements OnInit {

  constructor() { }

  public model: BehaviorState = new BehaviorState();

  ngOnInit(): void {
  }

}
