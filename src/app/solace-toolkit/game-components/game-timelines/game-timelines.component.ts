import { Component, OnInit } from '@angular/core';
import { Timeline } from '../../models/timeline';

@Component({
  selector: 'app-game-timelines',
  templateUrl: './game-timelines.component.html',
  styleUrls: ['./game-timelines.component.css']
})
export class GameTimelinesComponent implements OnInit {

  constructor() { }

  public model: Timeline = new Timeline();

  ngOnInit(): void {
  }

}
