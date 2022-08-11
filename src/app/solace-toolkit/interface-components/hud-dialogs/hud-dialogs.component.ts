import { Component, OnInit } from '@angular/core';
import { Huddialog } from '../../models/huddialog';

@Component({
  selector: 'app-hud-dialogs',
  templateUrl: './hud-dialogs.component.html',
  styleUrls: ['./hud-dialogs.component.css']
})
export class HudDialogsComponent implements OnInit {

  constructor() { }

  public model: Huddialog = new Huddialog();

  ngOnInit(): void {
  }

}
