import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionEvent } from '../../models/actionevent';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'solacetk-event-panel',
  templateUrl: './solacetk-event-panel.component.html',
  styleUrls: ['./solacetk-event-panel.component.css']
})
export class SolacetkEventPanelComponent implements OnInit {

  constructor(public solacetkService: SolacetkService) { }

  @Input() model: ActionEvent[] = [];
  @Output() modelChange: EventEmitter<ActionEvent[]> = new EventEmitter<ActionEvent[]>();

  @Input() panelType: string = "expansionpanel";

  @Input() eventColor: string = "indianred";

  ngOnInit(): void {
  }

  public AddEvent()
  {
    if (!this.model) this.model = [];

    this.solacetkService.CreateModel("Behaviors/events", new ActionEvent()).subscribe(n => {
      this.model = [...this.model, n];
      this.modelChange.emit(this.model);
    });
    
  }

  public RemoveEvent(key: ActionEvent): void {
    this.model.splice(this.GetKeyIndex(key), 1);
    this.modelChange.emit(this.model);
 }

  public GetKeyIndex(key: ActionEvent): number {
    return this.model.indexOf(key);
  }

}
