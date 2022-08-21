import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SoltkKeyValue } from '../../models/soltk-key-value';

@Component({
  selector: 'solacetk-attributes-panel',
  templateUrl: './solacetk-attributes-panel.component.html',
  styleUrls: ['./solacetk-attributes-panel.component.css']
})
export class SolacetkAttributesPanelComponent implements OnInit {


  @Input() model: SoltkKeyValue[] = [];
  @Output() modelChange = new EventEmitter<SoltkKeyValue[]>();

  @Input() panelName: string = "Attributes";

  @Input() panelType: string = "expansionpanel";

  constructor() { }

  ngOnInit(): void {
  }

  public AddAttribute(): void {
    if (!this.model) this.model = [];
    this.model = [...this.model, new SoltkKeyValue()];
  }

  public GetKeyIndex(key: SoltkKeyValue): number {
    return this.model.indexOf(key);
  }

}
