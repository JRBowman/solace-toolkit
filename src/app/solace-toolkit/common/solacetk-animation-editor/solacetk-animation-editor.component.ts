import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorAnimationData } from '../../models/behavioranimation';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'solacetk-animation-editor',
  templateUrl: './solacetk-animation-editor.component.html',
  styleUrls: ['./solacetk-animation-editor.component.css']
})
export class SolacetkAnimationEditorComponent implements OnInit, AfterViewInit {

  constructor(private service: SolacetkService) { }

  @Input() model: BehaviorAnimationData = new BehaviorAnimationData();
  @Output() modelChange = new EventEmitter<BehaviorAnimationData>();

  @Input() unloadChange = new EventEmitter<boolean>();

  public fileName: string = "";
  public sheetName: string = "";

  public frames: any[] = [];
  public selectedFrame: any = {};

  public render: boolean = true;

  public framesChange = new EventEmitter<string>();

  ngOnInit(): void {

    this.unloadChange.subscribe((value) => {
      if (value === true) {
        this.fileName = "";
        this.selectedFrame = {};
        this.sheetName = "";
        this.frames = [];
        this.render = false;
        console.log("unloading");
        return;
      }

      if (this.model.name) {
        console.log("loading");
        this.render = true;
        let texName = "http://localhost:5010/Ase/" + this.model.name;
        this.framesChange.emit(texName + ".png.json");
      }

    });

    this.framesChange.subscribe((url) => {
      this.service.GetData(url).subscribe((data) => {
        //this.model = data;

        let frames = Object.keys(data['frames']);

        frames.forEach(fr => {
          let f = data['frames'][fr];
          f.name = fr;
          this.frames.push(f);
        });
        this.selectedFrame = this.frames[0];
        this.model.framesJson = JSON.stringify(this.frames);
        let texName = "http://localhost:5010/Ase/" + this.model.name;
        this.sheetName = texName + ".gif";
        this.modelChange.emit(this.model);
      });
    });


    this.unloadChange.emit(false);
  }

  ngAfterViewInit(): void {
  }

  onSelect(event: any) {
    this.selectedFrame = event;
  }

  onAseSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {

      this.fileName = file.name;
      this.sheetName = "";
      const formData = new FormData();
      formData.append(this.model.name + ".ase", file);
      const upload$ = this.service.CreateModel("Files/ase", formData);

      upload$.subscribe((response) => {
        this.frames = [];
        this.selectedFrame = {};

        this.modelChange.emit(this.model);
        this.framesChange.emit(response.data.sheetData);
      });
    }
  }

  onSheetSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append(file.name, file);

      const upload$ = this.service.CreateModel("Files/ase", formData);

      upload$.subscribe();
    }
  }

  onTextureSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append(file.name, file);

      const upload$ = this.service.CreateModel("Files/ase", formData);

      upload$.subscribe();
    }
  }

}
