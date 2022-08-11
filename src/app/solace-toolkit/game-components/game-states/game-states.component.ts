import { Component, OnInit } from '@angular/core';
import { BehaviorState } from '../../models/behaviorstate';

@Component({
  selector: 'app-game-states',
  templateUrl: './game-states.component.html',
  styleUrls: ['./game-states.component.css']
})
export class GameStatesComponent implements OnInit {

  constructor() { }

  public model: BehaviorState = new BehaviorState();

  ngOnInit(): void {
  }

}
