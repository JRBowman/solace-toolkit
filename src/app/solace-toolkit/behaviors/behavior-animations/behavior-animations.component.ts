import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatChipSelectionChange } from '@angular/material/chips';
import { BehaviorAnimation, BehaviorAnimationData } from '../../models/behavioranimation';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'app-behavior-animations',
  templateUrl: './behavior-animations.component.html',
  styleUrls: ['./behavior-animations.component.css']
})
export class BehaviorAnimationsComponent implements OnInit {

  constructor(private service: SolacetkService) { }

  public model: BehaviorAnimation = new BehaviorAnimation();

  public unloadModules = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.unloadModules.emit(false);

  }

  LoadAnim(): void {
    this.unloadModules.emit(false);
  }

  CreateAnim(): void {

  }

  CloseAnim(): void {
    this.unloadModules.emit(true);
  }

}
