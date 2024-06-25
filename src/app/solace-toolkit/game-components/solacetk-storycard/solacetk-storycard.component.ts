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

  public localDuration: string = "00:00:00";

  public operators: string[] = SoltkKeyValue.conditionalOperatorValues;
  public dataOperators: string[] = SoltkKeyValue.actionOperatorValues;

  ngOnInit(): void {
    this.localDuration = this.GetDurationString(this.model.duration);
  }

  public ToggleReadonly(): void {
    this.readonly = !this.readonly;
  }

  public CalculateDuration() : void{
    var timeParts = this.localDuration.split(':');
    var hoursMs = (+timeParts[0] * 60 * 60) * 1000;
    var minsMs = (+timeParts[1] * 60) * 1000;
    var secsMs = +timeParts[2] * 1000;
    var ticks = (hoursMs + minsMs + secsMs) * 10000;
    this.model.duration = ticks;

    console.log(this.model.duration);
    this.modelChange.emit(this.model);
  }

  public GetDurationString(value: number) : string {
    // ticks to MS:
    var milliseconds = value / 10000;

    var dateTime = new Date(milliseconds);

    var str = dateTime.toISOString().substring(11,19);

    console.log(str);
    return str;
  }
  
}
