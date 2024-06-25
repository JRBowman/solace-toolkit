import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsoaUserService } from '../services/msoa-user-service';
import { InventoryReport } from '../solace-toolkit/models/inventory-report';
import { ServiceHealthReport } from '../solace-toolkit/models/service-health-report';
import { SolacetkService } from '../solace-toolkit/services/solacetk-service.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor(public service: SolacetkService,
    public router: Router, public msoaUserService: MsoaUserService) { }

  public inventory: InventoryReport = new InventoryReport();
  public inventoryKeys: string[] = [];

  public invObj: any = {};

  public aseEnabled: boolean = false;

  public dashboards: any[] = [];

  ngOnInit(): void 
  {

    this.RefreshInventory();
  }

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

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

}
