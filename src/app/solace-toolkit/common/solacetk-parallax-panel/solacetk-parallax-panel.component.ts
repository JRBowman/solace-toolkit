import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'solacetk-parallax-panel',
  templateUrl: './solacetk-parallax-panel.component.html',
  styleUrls: ['./solacetk-parallax-panel.component.css']
})
export class SolacetkParallaxPanelComponent implements OnInit {


  @Input() bgUrl: string = "http://localhost:5010/Artifacts/solace-site-para-room-0a.png";
  @Input() bgSize: string = "cover";
  @Input() bgPosition: string = "";

  @Input() bgAnimation: string = "pan-overlay 3s infinite linear";
  @Input() bgTiming: string = "linear";

  @Input() envBackground: string = "linear-gradient(black 16%, #a7ffe7 33%, black 100%)";
  @Input() envLighting: string = "linear-gradient(black,#1c1a22,#c23d5a 50%,#241b3a 60%,black)";

  @Input() panelTransform: string = "translateZ(-16px) scale(1.5)";
  @Input() speed: string = "5s";

 


  ngOnInit(): void {
    this.bgAnimation = "pan-overlay " + this.speed + " infinite linear";
  }
}
