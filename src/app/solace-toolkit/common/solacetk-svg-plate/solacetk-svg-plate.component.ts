import { Component, Input } from '@angular/core';

@Component({
  selector: 'solacetk-svg-plate',
  templateUrl: './solacetk-svg-plate.component.html',
  styleUrls: ['./solacetk-svg-plate.component.css']
})
export class SolacetkSvgPlateComponent {


  @Input() plateColor: string = "mediumslateblue";
  @Input() plateBorderColor: string = "white";
  @Input() plateFontColor: string = "white";
  @Input() plateFontSize: string = "12px";
  @Input() plateFontWeight: string = "500";
  @Input() plateText: string = "TK";
  @Input() width: string = "36px";
  @Input() height: string = "36px";
  @Input() radius: string = "12";

}
