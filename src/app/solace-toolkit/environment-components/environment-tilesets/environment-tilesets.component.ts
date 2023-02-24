import { Component, OnInit } from '@angular/core';
import { MapTileset } from '../../models/map-tileset';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'app-environment-tilesets',
  templateUrl: './environment-tilesets.component.html',
  styleUrls: ['./environment-tilesets.component.css']
})
export class EnvironmentTilesetsComponent implements OnInit {

  constructor(private soltkService: SolacetkService) { }

  public model: MapTileset = new MapTileset();

  public profileUrl: string = "";

  ngOnInit(): void {
  }

  loadEditor(): void {

    // Load Data related to the Model:
    this.profileUrl = this.soltkService.apiHost + "Ase/" + this.model.name + "/" + this.model.name;
  }


  public fileName: string = "";
  public onAseSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {

      this.fileName = file.name;
      const formData = new FormData();
      formData.append(this.model?.name + ".ase", file);
      const upload$ = this.soltkService.CreateModel("Files/ase?splitLayers=true", formData);

      upload$.subscribe((response) => {
        this.model = new MapTileset();

        // Response Data:
        console.log(response);
        //this.modelChange.emit(this.model);
      });
    }
  }

}
