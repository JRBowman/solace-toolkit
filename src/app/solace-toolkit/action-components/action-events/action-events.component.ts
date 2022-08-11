import { Component, OnInit } from '@angular/core';
import { Actionevent } from '../../models/actionevent';

@Component({
  selector: 'app-action-events',
  templateUrl: './action-events.component.html',
  styleUrls: ['./action-events.component.css']
})
export class ActionEventsComponent implements OnInit {

  constructor() { }

  public model: Actionevent = new Actionevent();

  ngOnInit(): void {
  }

}
