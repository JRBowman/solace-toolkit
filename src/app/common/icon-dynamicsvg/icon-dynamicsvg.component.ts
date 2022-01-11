import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-dynamicsvg',
  templateUrl: './icon-dynamicsvg.component.html',
  styleUrls: ['./icon-dynamicsvg.component.css']
})
export class IconDynamicsvgComponent implements OnInit {

  constructor() { }

  @Input() src: string = "";
  @Input() width: string = "32px";
  @Input() height: string = "32px";

  ngOnInit(): void {
  }

}
