import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSystem, BehaviorType } from '../../models/behaviorsystem';

@Component({
  selector: 'app-behavior-systems',
  templateUrl: './behavior-systems.component.html',
  styleUrls: ['./behavior-systems.component.css']
})
export class BehaviorSystemsComponent implements OnInit {


constructor(private http: HttpClient) { }

public model: BehaviorSystem = new BehaviorSystem();

  ngOnInit(): void {
    this.behaviorTypes = Object.keys(BehaviorType).filter(f => !isNaN(Number(f)));
  }

  public behaviorTypes: any[] = [];
  public selectedBehavior: string = "";

  public behavior = BehaviorType;

  public GetBehaviorType(item: string): string
  {
    this.selectedBehavior = BehaviorType[Number.parseInt(item)];
    return this.selectedBehavior;
  }



}
