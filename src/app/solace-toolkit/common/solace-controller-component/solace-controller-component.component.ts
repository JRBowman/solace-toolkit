import { Component, Input, OnInit } from '@angular/core';
import { BehaviorComponent } from '../../models/behavioranimation';

@Component({
  selector: 'app-solace-controller-component',
  templateUrl: './solace-controller-component.component.html',
  styleUrls: ['./solace-controller-component.component.css']
})
export class SolaceControllerComponentComponent implements OnInit {

  constructor() { }

  @Input() model: BehaviorComponent = new BehaviorComponent();

  public componentTypeClass: string = "component-collider";

  ngOnInit(): void {
  }

}
