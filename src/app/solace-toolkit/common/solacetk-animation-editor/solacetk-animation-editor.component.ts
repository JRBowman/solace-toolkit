import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorAnimationFrame } from '../../models/behavior-animation-frame';
import { BehaviorAnimationData, BehaviorComponent } from '../../models/behavioranimation';
import { SoltkKeyValue } from '../../models/soltk-key-value';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'solacetk-animation-editor',
  templateUrl: './solacetk-animation-editor.component.html',
  styleUrls: ['./solacetk-animation-editor.component.css']
})
export class SolacetkAnimationEditorComponent implements OnInit, AfterViewInit {

  constructor(private service: SolacetkService) { }

  @Input() model?: BehaviorAnimationData;
  @Output() modelChange = new EventEmitter<BehaviorAnimationData>();

  @Input() unloadChange = new EventEmitter<boolean>();

  @Input() showFrames: boolean = true;
  @Input() showFileInfo: boolean = true;
  @Input() showDataPanel: boolean = true;
  @Input() bgColor: string = "transparent";
  @Input() panelName: string = "Animation Data";

  @Input() modelName: string = "";


  public fileName: string = "";
  public sheetName: string = "../../assets/soldof/images/settings.png";
  public aseReady: boolean = false;

  public frames: any[] = [];
  public selectedFrame: BehaviorAnimationFrame = new BehaviorAnimationFrame();
  public selected: number = 0;

  public selectedComponent?: BehaviorComponent;
  public selectedCompIndex: number = 0;

  public framesChange = new EventEmitter<string>();

  public isPlaying: boolean = false;

  private interval: any;


  public spriteWidth: number = 48;
  public spriteHeight: number = 48;
  public zoomFactor: number = 4;

  ngOnInit(): void {

    //this.model.frames = [];
    this.unloadChange.subscribe((value) => {
      if (value === true) {
        this.fileName = "";
        this.frames = [];
        this.sheetName = "../../assets/soldof/images/settings.png";
        console.log("unloaded...");
        return;
      }

      if (this.model) {
        let texName = "Ase/" + this.modelName + "/" + this.model.name;
        this.framesChange.emit(texName + ".png.json");
        console.log("loaded");
      }
    });

    this.framesChange.subscribe((url) => {
      console.log(url);
      this.service.GetData(url).subscribe((data) => {

        if (!data) return;
        //this.model = data;
        //if (!this.model) this.model = data;

        // if (!data) return;
        if (!this.model?.frames || this.model.frames.length == 0) {
          let frames = Object.keys(data['frames']);

          frames.forEach(fr => {
            let f = data['frames'][fr];
            f.name = fr;
            this.frames.push(f);
            if (this.model && !this.model?.frames) this.model.frames = [];
            if (!this.model?.frames.find(x => x.frame == f)) {
              let modelFrame = new BehaviorAnimationFrame();
              modelFrame.name = f.name;
              //if (!modelFrame.downstreamData) modelFrame.downstreamData = [];
              modelFrame.duration = f.duration;
              modelFrame.frame = f;
              //this.frameWidth = (f.sourceSize.w * this.zoomFactor);
              this.model?.frames.push(modelFrame);
            }
          });
        }
        else {
          this.frames = this.model?.frames ?? [];
        }



        //this.selectedFrame = this.frames[0];
        if (this.model) this.model.framesJson = JSON.stringify(this.frames);


        let texName = "Ase/" + this.modelName + "/" + this.model?.name;
        this.sheetName = this.service.apiHost + texName + ".png";
        this.aseReady = true;

        this.modelChange.emit(this.model);
      })
      // (error) => {
      //   console.log(error);
      //   this.sheetName = "../../assets/soldof/images/settings.png";
      //   this.aseReady = false;
      // });
    });

    this.unloadChange.emit(false);

  }

  public logModel() {
    console.log(this.model);
  }

  public addComponentToFrame() {

    if (this.selectedComponent) {
      console.log("Adding components to frame:");
      let componentData: SoltkKeyValue[] = BehaviorComponent.getStateValues(this.selectedComponent);
      console.log(componentData);
      let ind = 0;
      //this.selectedFrame.downstreamData = [...this.selectedFrame.downstreamData, ...event];
      componentData.forEach(pair => {
        if ((ind = this.selectedFrame.downstreamData.findIndex(x => x.key == pair.key)) == -1) {
          // Doesn't Exist, add it:
          this.selectedFrame.downstreamData = [...this.selectedFrame.downstreamData, pair];
        }
        // Data already exists
        else {
          this.selectedFrame.downstreamData[ind].data = pair.data;
        }
      });
      this.modelChange.emit(this.model);
    }

    
  }

  ngAfterViewInit(): void {
  }

  playAnimation() {

    if (this.model && !this.model?.loop && this.selected == this.model.frames.length - 1) this.selected = 0;
    this.isPlaying = true;
    this.animate();
  }

  private run: boolean = true;
  animate() {
    let tempSpeed = this.selectedFrame.duration * (this.model?.speed ?? 1);
    if (!this.isPlaying || !this.model) return;
    this.interval = setTimeout(() => {
      if (this.isPlaying && this.model) {
        if (this.model?.loop) this.selected = (this.selected + 1) % this.model.frames.length;
        else if (this.selected < this.model.frames.length) this.selected = this.selected + 1;

        if (this.selected == this.model.frames.length - 1 && !this.model?.loop) {
          //this.selected = 0;
          this.run = false;
          this.stopAnimation();
        }
        this.selectedFrame = this.model.frames[this.selected];

        // Process Components:
        if (this.model.components && this.model.components.length > 0) {
          this.selectedFrame.downstreamData.forEach(data => {

            if (data.key.includes(".")) {
              let keys = data.key.split(".");

              let component = this.model?.components.find(x => x.name == keys[0]) as any;

              if (component) component[keys[1]] = data.data;
            }
          });
        }


        this.animate();

      }

    }, tempSpeed);
  }

  stopAnimation() {
    this.isPlaying = false;
  }

  onSelect(event: any) {
    if (this.model) {
      this.selected = this.frames.indexOf(event);
      this.selectedFrame = this.model.frames[this.selected];

      // Process Components:
      if (this.model.components && this.model.components.length > 0) {
        this.selectedFrame.downstreamData.forEach(data => {

          if (data.key.includes(".")) {
            let keys = data.key.split(".");

            let component = this.model?.components.find(x => x.name == keys[0]) as any;

            if (component) component[keys[1]] = data.data;
          }
        });
      }
    }
  }

  onComponentSelect(event: any) {
    if (this.model) {
      this.selectedCompIndex = this.model.components.indexOf(event);
      this.selectedComponent = this.model.components[this.selectedCompIndex];
    }
  }

  loadDefaultComponents() {
    if (this.model) {
      if (!this.model.components) this.model.components = [];
      this.model.components = [...this.model.components, ...BehaviorComponent.defaultComponents];
      this.modelChange.emit(this.model);
    }
  }

  addComponent() {
    if (this.model) {
      if (!this.model.components) this.model.components = [];
      this.model.components = [...this.model.components, new BehaviorComponent()];
      this.modelChange.emit(this.model);
    }
  }

  removeComponent(component: BehaviorComponent) {
    if (this.model) {
      if (!this.model.components) this.model.components = [];
      this.model.components.splice(this.model.components.indexOf(component), 1);
      this.modelChange.emit(this.model);
    }
  }

  onAseSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {

      this.fileName = file.name;
      this.sheetName = "";
      const formData = new FormData();
      formData.append(this.model?.name + ".ase", file);
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
