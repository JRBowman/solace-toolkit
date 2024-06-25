import { Directive, ElementRef, Input, AfterViewInit, ViewChild, QueryList, ViewChildren, OnInit } from '@angular/core';
// import * as LeaderLine from 'leader-line';

declare var LeaderLine: any; // Import the leader-line library (already included)

@Directive({
  selector: '[graphLine]'
})
export class GraphLineDirective implements OnInit, AfterViewInit {

  @Input() startRef?: HTMLElement | null;
  @Input() endRef?: HTMLElement | null;

  public line: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.startRef && this.endRef) {
      this.line = new LeaderLine(this.startRef, this.endRef);
      // Customize the line appearance if needed
    }
  }

  ngAfterViewInit() {
    
  }

}
