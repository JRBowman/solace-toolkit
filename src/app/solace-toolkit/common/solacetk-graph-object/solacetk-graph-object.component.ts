import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'solacetk-graph-object',
  templateUrl: './solacetk-graph-object.component.html',
  styleUrls: ['./solacetk-graph-object.component.css']
})
export class SolacetkGraphObjectComponent implements OnInit {

  constructor() { }

  @Input() name: string = "Graph Object";
  @Input() ref: boolean = false;

  @Input() model?: any;
  @Output() modelChange = new EventEmitter<any>();

  @Input() trackedInputs: string[] = ["start", "act", "end"];
  @Input() trackedInputsB: string[] = ["events", "states"];
  @Input() trackedOutputs: string[] = [];
  @Input() trackedInputsT: string[] = [];


  public ngOnInit(): void {

  }



}
