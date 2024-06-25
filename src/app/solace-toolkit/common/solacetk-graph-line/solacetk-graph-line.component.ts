import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
// import LeaderLine from 'leader-line';

declare var LeaderLine: any; // Import the leader-line library (already included)

@Component({
  selector: 'app-line-between-elements',
  template: `
    <div #startElement>Start</div>
    <div #destinationElement>Destination</div>
  `,
})
export class SolacetkGraphLineComponent implements AfterViewInit {
  @ViewChild('startElement') startElementRef!: ElementRef;
  @ViewChild('destinationElement') destinationElementRef!: ElementRef;

  ngAfterViewInit() {
    const startElement = this.startElementRef.nativeElement;
    const destinationElement = this.destinationElementRef.nativeElement;

    const line = new LeaderLine(startElement, destinationElement);
    // Customize the line appearance if needed
    // e.g., line.setOptions({ color: 'red', size: 2 });
  }
}

