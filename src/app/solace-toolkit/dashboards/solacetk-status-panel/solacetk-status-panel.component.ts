import { Component, Input, OnInit } from '@angular/core';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'solacetk-status-panel',
  templateUrl: './solacetk-status-panel.component.html',
  styleUrls: ['./solacetk-status-panel.component.css']
})
export class SolacetkStatusPanelComponent implements OnInit {


  constructor(public service: SolacetkService) {}
  
  @Input() panelFlex: string = "";

  ngOnInit(): void {
    
  }

 
}
