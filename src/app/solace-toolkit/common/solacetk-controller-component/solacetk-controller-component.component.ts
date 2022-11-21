import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorComponent } from '../../models/behavioranimation';

@Component({
  selector: 'solacetk-controller-component',
  templateUrl: './solacetk-controller-component.component.html',
  styleUrls: ['./solacetk-controller-component.component.css']
})
export class SolacetkControllerComponentComponent implements OnInit {

  constructor() { }

  @Input() model: BehaviorComponent[] = [];
  @Output() modelChange: EventEmitter<BehaviorComponent[]> = new EventEmitter<BehaviorComponent[]>();

  @Input() selectedComponent?: BehaviorComponent;
  @Output() selectedComponentChange: EventEmitter<BehaviorComponent> = new EventEmitter<BehaviorComponent>();

  @Input() panelType: string = "expansionpanel";

  @Input() panelColor: string = "darkgrey";

  public componentTypes?: string[] = BehaviorComponent.componentTypes;

  ngOnInit(): void {
  }

  public addComponent()
  {
    if (!this.model) this.model = [];
    this.model = [...this.model, new BehaviorComponent()];
    this.modelChange.emit(this.model);
  }

  public onComponentSelect(event: any)
  {
    this.selectedComponent = event;
    this.selectedComponentChange.emit(this.selectedComponent);
  }

}
