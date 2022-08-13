import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SolacetkSearchSheetComponent } from '../../common/solacetk-search-sheet/solacetk-search-sheet.component';
import { MovableController } from '../../models/movablecontroller';

@Component({
  selector: 'app-particle-systems',
  templateUrl: './particle-systems.component.html',
  styleUrls: ['./particle-systems.component.css']
})
export class ParticleSystemsComponent implements OnInit {

  public model: MovableController = new MovableController();

  public worldLocation: string = "0,0,0";

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  public Create()
  {
    this.model = new MovableController();
  }


  public openBehaviorsSheet()
  {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData('Behaviors/systems');

    instance.instance.modelsSelected.subscribe((models) => 
    {
      this.model.behaviorSystem = models[0];
    });
    
  }

}
