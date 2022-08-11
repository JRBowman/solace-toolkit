import { Component, OnInit } from '@angular/core';
import { Actionmessage } from '../../models/actionmessage';

@Component({
  selector: 'app-action-messages',
  templateUrl: './action-messages.component.html',
  styleUrls: ['./action-messages.component.css']
})
export class ActionMessagesComponent implements OnInit {

  constructor() { }

  public model: Actionmessage = new Actionmessage();

  ngOnInit(): void {
  }

}
