import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionMessage } from '../../models/actionmessage';
import { SoltkKeyValue } from '../../models/soltk-key-value';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'solacetk-messages-panel',
  templateUrl: './solacetk-messages-panel.component.html',
  styleUrls: ['./solacetk-messages-panel.component.css']
})
export class SolacetkMessagesPanelComponent implements OnInit {

  constructor(public solacetkService: SolacetkService) { }

  @Input() model: ActionMessage[] = [];
  @Output() modelChange = new EventEmitter<ActionMessage[]>();

  @Input() panelType: string = "panel";

  @Input() messageColor: string = "rebeccapurple"

  ngOnInit(): void {
  }

  public AddMessage()
  {
    if (!this.model) this.model = [];

    let tmpEvent = new ActionMessage();
    this.solacetkService.CreateModel("Behaviors/events/messages", tmpEvent).subscribe(n => tmpEvent = n);

    this.model = [...this.model, tmpEvent];
    this.modelChange.emit(this.model);
  }

  public RemoveMessage(key: ActionMessage): void {
    this.model.splice(this.GetKeyIndex(key), 1);
    this.modelChange.emit(this.model);
 }

  public GetKeyIndex(key: ActionMessage): number {
    return this.model.indexOf(key);
  }

}
