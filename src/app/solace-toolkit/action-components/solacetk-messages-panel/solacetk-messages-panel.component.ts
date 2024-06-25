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
  @Input() creationType: string = "server";

  @Input() messageColor: string = "rebeccapurple"

  ngOnInit(): void {
  }

  public AddMessage() {
    if (!this.model) this.model = [];

    if (this.creationType == "server") {
      this.solacetkService.CreateModel("Events/messages", new ActionMessage()).subscribe(n => {
        this.model = [...this.model, n];
        this.modelChange.emit(this.model);
      });
    }
    else {
      this.model = [...this.model, new ActionMessage()];
      this.modelChange.emit(this.model);
    }


  }

  public RemoveMessage(key: ActionMessage): void {
    this.model.splice(this.GetKeyIndex(key), 1);
    this.modelChange.emit(this.model);
  }

  public GetKeyIndex(key: ActionMessage): number {
    return this.model.indexOf(key);
  }

}
