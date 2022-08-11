import { Component, OnInit } from '@angular/core';
import { BehaviorAction } from '../../models/behavioraction';

@Component({
  selector: 'app-behavior-actions',
  templateUrl: './behavior-actions.component.html',
  styleUrls: ['./behavior-actions.component.css']
})
export class BehaviorActionsComponent implements OnInit {

  constructor() { }

  public model: BehaviorAction = new BehaviorAction();

  ngOnInit(): void {
  }

}
