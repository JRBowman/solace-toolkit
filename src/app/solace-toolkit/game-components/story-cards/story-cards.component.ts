import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SoltkKeyValue } from '../../models/soltk-key-value';
import { StoryCard } from '../../models/storycard';

@Component({
  selector: 'app-story-cards',
  templateUrl: './story-cards.component.html',
  styleUrls: ['./story-cards.component.css']
})
export class StoryCardsComponent {
  
  constructor(private _bottomSheet: MatBottomSheet) { 
  }

  public model: StoryCard = new StoryCard();

  public conditionalOperators: string[] = SoltkKeyValue.conditionalOperatorValues;
  public actionOperators: string[] = SoltkKeyValue.actionOperatorValues;

  ngOnInit(): void {

  }
}
