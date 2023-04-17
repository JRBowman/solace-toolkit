import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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

  @Input() operatorsEnabled: boolean = true;
  @Input() panelName: string = "Attributes";
  @Input() panelType: string = "expansionpanel";
  @Input() panelElevation: string = "2";
  @Input() panelColor: string = "#403080";
  @Output() panelColorChange = new EventEmitter<string>();

  @Input() unitWidth: string = "auto";
  @Input() unitHeight: string = "auto";

  @Input() panelClass: string = "";
  @Input() panelIcon: string = "data_object";
  @Input() fieldMode: string = "chips";

  public operators: string[] = [];

  @Input() panelMode: panelType = panelType.conditions;

  constructor() { }

  ngOnInit(): void {

    this.panelType = "expansionpanel";
    if (this.panelMode == panelType.conditions) this.operators = SoltkKeyValue.conditionalOperatorValues;
    else if (this.panelMode == panelType.variables) this.operators = SoltkKeyValue.actionOperatorValues;
  }

  dropConditions(event: CdkDragDrop<SoltkKeyValue[]>) {
    moveItemInArray(this.model, event.previousIndex, event.currentIndex);
    this.modelChange.emit(this.model);
  }

  public AddAttribute(): void {
    if (!this.model) this.model = [];
    this.model = [...this.model, new SoltkKeyValue()];
    this.modelChange.emit(this.model);
  }

  public RemoveAttribute(key: SoltkKeyValue): void {
    this.model.splice(this.GetKeyIndex(key), 1);
    this.modelChange.emit(this.model);
 }

  public GetKeyIndex(key: SoltkKeyValue): number {
    return this.model.indexOf(key);
  }

  public SelectOperator(instance: number, op: string): void
  {
    this.model[instance].operator = this.operators.indexOf(op);
  }

}

enum panelType{
  conditions,
  variables
}
