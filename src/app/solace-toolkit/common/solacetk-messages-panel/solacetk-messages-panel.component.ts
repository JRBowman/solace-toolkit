import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionMessage } from '../../models/actionmessage';
import { SoltkKeyValue } from '../../models/soltk-key-value';

@Component({
  selector: 'solacetk-messages-panel',
  templateUrl: './solacetk-messages-panel.component.html',
  styleUrls: ['./solacetk-messages-panel.component.css']
})
export class SolacetkMessagesPanelComponent implements OnInit {

  constructor() { }

  @Input() model: ActionMessage[] = [];
  @Output() modelChange = new EventEmitter<ActionMessage[]>();

  @Input() panelType: string = "panel";

  @Input() messageColor: string = "rebeccapurple"

  ngOnInit(): void {
  }

  public AddMessage()
  {
    if (!this.model) this.model = [];
    this.model = [...this.model, new ActionMessage()];
  }

  public RemoveMessage(key: ActionMessage): void {
    this.model.splice(this.GetKeyIndex(key), 1);
 }

  public GetKeyIndex(key: ActionMessage): number {
    return this.model.indexOf(key);
  }

}
