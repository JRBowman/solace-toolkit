import { Component, OnInit } from '@angular/core';
import { ActionMessage } from '../../models/actionmessage';

@Component({
  selector: 'app-action-messages',
  templateUrl: './action-messages.component.html',
  styleUrls: ['./action-messages.component.css']
})
export class ActionMessagesComponent implements OnInit {

  constructor() { }

  public model: ActionMessage = new ActionMessage();

  public messageColor: string = "mediumslateblue";

  ngOnInit(): void {
  }

}
