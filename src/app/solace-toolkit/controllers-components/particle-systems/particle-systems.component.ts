import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ParticleSystem } from '../../models/particle-system';

@Component({
  selector: 'app-particle-systems',
  templateUrl: './particle-systems.component.html',
  styleUrls: ['./particle-systems.component.css']
})
export class ParticleSystemsComponent implements OnInit {

  public model: ParticleSystem = new ParticleSystem();

  public worldLocation: string = "0,0,0";

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  public Create()
  {
    this.model = new ParticleSystem();
  }

}
