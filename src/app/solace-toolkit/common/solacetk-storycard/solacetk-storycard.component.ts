import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SoltkKeyValue } from '../../models/soltk-key-value';
import { StoryCard } from '../../models/storycard';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'solacetk-storycard',
  templateUrl: './solacetk-storycard.component.html',
  styleUrls: ['./solacetk-storycard.component.css']
})
export class SolacetkStorycardComponent implements OnInit {

  constructor(public solacetkService: SolacetkService) { }
  
  @Input() model: StoryCard = new StoryCard();
  @Output() modelChange: EventEmitter<StoryCard> = new EventEmitter<StoryCard>();

  @Input() panelType: string = "expansionpanel";

  @Input() cardColor: string = "indianred";

  @Input() readonly: boolean = false;

  public operators: string[] = SoltkKeyValue.conditionalOperatorValues;
  public dataOperators: string[] = SoltkKeyValue.actionOperatorValues;

  ngOnInit(): void {
  }
  
}
