import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionEvent } from '../../models/actionevent';

@Component({
  selector: 'solacetk-event-panel',
  templateUrl: './solacetk-event-panel.component.html',
  styleUrls: ['./solacetk-event-panel.component.css']
})
export class SolacetkEventPanelComponent implements OnInit {

  constructor() { }

  @Input() model: ActionEvent[] = [];
  @Output() modelChange: EventEmitter<ActionEvent[]> = new EventEmitter<ActionEvent[]>();

  @Input() panelType: string = "expansionpanel";

  @Input() eventColor: string = "indianred";

  ngOnInit(): void {
  }

  public AddEvent()
  {
    if (!this.model) this.model = [];
    this.model = [...this.model, new ActionEvent()];
  }

  public RemoveEvent(key: ActionEvent): void {
    this.model.splice(this.GetKeyIndex(key), 1);
 }

  public GetKeyIndex(key: ActionEvent): number {
    return this.model.indexOf(key);
  }

}
