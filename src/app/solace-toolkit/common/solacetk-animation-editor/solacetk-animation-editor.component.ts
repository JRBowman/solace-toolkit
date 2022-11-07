import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorAnimationFrame } from '../../models/behavior-animation-frame';
import { BehaviorAnimationData } from '../../models/behavioranimation';
import { SoltkKeyValue } from '../../models/soltk-key-value';
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

  @Input() showFrames: boolean = true;
  @Input() showFileInfo: boolean = true;
  @Input() showDataPanel: boolean = true;
  public bgColor: string = "";


  public fileName: string = "";
  public sheetName: string = "../../assets/soldof/images/settings.png";
  public aseReady: boolean = false;

  public frames: any[] = [];
  public selectedFrame: BehaviorAnimationFrame = new BehaviorAnimationFrame();
  public selected: number = 0;

  public framesChange = new EventEmitter<string>();

  ngOnInit(): void {

    this.model.frames = [];
    this.unloadChange.subscribe((value) => {
      if (value === true) {
        this.fileName = "";
        this.frames = [];
        this.sheetName = "../../assets/soldof/images/settings.png";
        console.log("unloaded...");
        return;
      }

      if (this.model) {
        let texName = "Ase/" + this.model.name + "/" + this.model.name;
        this.framesChange.emit(texName + ".png.json");
        console.log("loaded");
      }
    });

    this.framesChange.subscribe((url) => {
      console.log(url);
      this.service.GetData(url).subscribe((data) => {
        //this.model = data;

        let frames = Object.keys(data['frames']);

        frames.forEach(fr => {
          let f = data['frames'][fr];
          f.name = fr;
          this.frames.push(f);
          if (!this.model.frames.find(x => x.frame == f)) {
            let modelFrame = new BehaviorAnimationFrame();
            modelFrame.name = f.name;
            //if (!modelFrame.downstreamData) modelFrame.downstreamData = [];
            modelFrame.duration = f.duration;
            modelFrame.frame = f;
            this.model.frames.push(modelFrame);
          }
        });



        //this.selectedFrame = this.frames[0];
        this.model.framesJson = JSON.stringify(this.frames);


        let texName = "Ase/" + this.model.name + "/" + this.model.name;
        this.sheetName = this.service.apiHost + texName + ".gif";
        this.aseReady = true;

        this.modelChange.emit(this.model);
      },
        (error) => {
          console.log(error);
          this.sheetName = "../../assets/soldof/images/settings.png";
          this.aseReady = false;
        });
    });

    this.unloadChange.emit(false);

    this.bgColor = this.showDataPanel ? "" : "bg-task-card";

  }

  ngAfterViewInit(): void {
  }

  onSelect(event: any) {
    this.selectedFrame = this.model.frames.filter(x => x.frame == event)[0];
    this.selected = this.frames.indexOf(event);
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
        this.selectedFrame = new BehaviorAnimationFrame();

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
