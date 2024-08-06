import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'solacetk-model-card',
  templateUrl: './solacetk-model-card.component.html',
  styleUrls: ['./solacetk-model-card.component.css']
})
export class SolacetkModelCardComponent implements OnInit {

  constructor(public service:SolacetkService) {}


  @Input() model: any = {};
  @Output() modelChange = new EventEmitter<any>();

  @Input() modelType: string = "";
  @Input() modelColor: string = "teal";

  @Input() hasPreview: boolean = true;

  
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.GetPreviewUrl(this.model);
  }



  public GetPreviewUrl(model: any): string {
    model.previewUrl = "/Artifacts/" + model.name + "/" + model.name + ".gif";
    return model.previewUrl;
  }
}
