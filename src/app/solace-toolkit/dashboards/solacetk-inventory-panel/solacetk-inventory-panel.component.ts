import { Component, Input, OnInit } from '@angular/core';
import { InventoryReport } from '../../models/inventory-report';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'solacetk-inventory-panel',
  templateUrl: './solacetk-inventory-panel.component.html',
  styleUrls: ['./solacetk-inventory-panel.component.css']
})
export class SolacetkInventoryPanelComponent implements OnInit {


  constructor(public service: SolacetkService) {}

  @Input() panelFlex: string = "";

  ngOnInit(): void {
    this.RefreshInventory();
  }

  public inventory: InventoryReport = new InventoryReport();
  public inventoryKeys: string[] = [];

  public invObj: any = {};


  public RefreshInventory(): void {
    this.service.GetModel("Health/Inventory").subscribe(inv => {
      this.inventory = inv;
      this.inventoryKeys = Object.keys(this.inventory);
      this.invObj = inv;

    });
  }

  public GetInventoryValue(key: string): number {
    return this.invObj[key];
  }
}
