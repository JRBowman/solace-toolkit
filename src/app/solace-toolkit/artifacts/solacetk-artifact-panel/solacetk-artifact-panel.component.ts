import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Artifact } from '../../models/artifact';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'solacetk-artifact-panel',
  templateUrl: './solacetk-artifact-panel.component.html',
  styleUrls: ['./solacetk-artifact-panel.component.css']
})
export class SolacetkArtifactPanelComponent implements OnInit {

  constructor(public soltkService: SolacetkService) {}

  @Input() model?: Artifact;
  @Output() modelChange = new EventEmitter<Artifact>();

  @Input() id: number = 0;
  @Output() idChange = new EventEmitter<number>();

  ngOnInit(): void {
    
  }


  public CreateArtifact(): void {

  }

  public UpdateArtifact(): void {
    
  }

  public fileName: string = "";
  public ImportArtifact(event: any) {

    const file: File = event.target.files[0];

    console.log(file);

    if (file) {

      this.fileName = file.name;
      const formData = new FormData();
      //formData.append("model", JSON.stringify(this.model));
      formData.append(file.name, file);
      const upload$ = this.soltkService.CreateModel("Artifacts/Instances", formData);

      upload$.subscribe((response) => {
        //this.model = new ();
        if (!this.model) this.model = new Artifact();
        this.model = response.data;
        this.id = this.model?.id ?? 0;

        console.log(response);
        this.modelChange.emit(this.model);
        this.idChange.emit(this.id);
        //this.modelChange.emit(this.model);
      });
    }
  }

}
