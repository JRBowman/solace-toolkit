import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SolacetkSearchSheetComponent } from '../../common/solacetk-search-sheet/solacetk-search-sheet.component';
import { StoryCard } from '../../models/storycard';
import { Timeline } from '../../models/timeline';

@Component({
  selector: 'app-game-timelines',
  templateUrl: './game-timelines.component.html',
  styleUrls: ['./game-timelines.component.css']
})
export class GameTimelinesComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  public model: Timeline = new Timeline();

  ngOnInit(): void {

  }

  public timelineLoaded() 
  {
    this.model.storyCards.sort((a, b) => { console.log(a.order - b.order); return a.order - b.order; });

    this.model.storyCards.forEach(e => {
      e.order = this.model.storyCards.indexOf(e);
    }); 
  }

  public addStoryCard()
  {
    this.model.storyCards = [...this.model.storyCards, new StoryCard()];
  }

  public openCardsSheet() 
  {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData('StoryCards');

    instance.instance.modelsSelected.subscribe((models) => 
    {
      this.model.storyCards = [...this.model.storyCards, ...models];
    });
  }

  drop(event: CdkDragDrop<StoryCard[]>) {
    moveItemInArray(this.model.storyCards, event.previousIndex, event.currentIndex);
    //event.item.data.order = event.currentIndex;
    //this.timelineLoaded();
    this.model.storyCards.forEach(e => {
      e.order = this.model.storyCards.indexOf(e);
    });

    this.model.storyCards.sort((a, b) => { console.log(a.order - b.order); return a.order - b.order; });
  }

}
