import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorAnimationFrame } from '../../models/behavior-animation-frame';
import { BehaviorAnimationData } from '../../models/behavioranimation';
import { SoltkKeyValue } from '../../models/soltk-key-value';
import { SolacetkMenuProviderService } from '../../services/solacetk-menu-provider.service';
import { SolacetkService } from '../../services/solacetk-service.service';
import { SolaceTkSoundService } from '../../services/solacetk-sounds.service';
import { SolacetkAnimationDialogComponent } from '../solacetk-animation-dialog/solacetk-animation-dialog.component';
import { SolTkComponent } from '../../models/soltk-component';

@Component({
  selector: 'solacetk-animation-editor',
  templateUrl: './solacetk-animation-editor.component.html',
  styleUrls: ['./solacetk-animation-editor.component.css']
})
export class SolacetkAnimationEditorComponent implements OnInit, AfterViewInit {

  constructor(private service: SolacetkService, public soundService: SolaceTkSoundService, public menuService: SolacetkMenuProviderService) { }

  @Input() model?: BehaviorAnimationData;
  @Output() modelChange = new EventEmitter<BehaviorAnimationData>();

  @Input() unloadChange = new EventEmitter<boolean>();

  @Input() showFrames: boolean = true;
  @Input() showFileInfo: boolean = true;
  @Input() showDataPanel: boolean = true;
  @Input() bgColor: string = "";
  @Input() panelName: string = "Animation Data";

  @Input() modelName: string = "";

  @Input() expanded: boolean = true;
  @Input() panelType: string = "panel";

  @Input() components: SolTkComponent[] = [];
  @Output() componentsChange = new EventEmitter<SolTkComponent[]>();


  public fileName: string = "";
  public sheetName: string = "../../assets/soldof/images/settings.png";
  public aseReady: boolean = false;

  public frames: any[] = [];
  @Input() selectedFrame?: BehaviorAnimationFrame;
  @Output() selectedFrameChange = new EventEmitter<BehaviorAnimationFrame>();

  public selected: number = -1;

  public selectedComponent?: SolTkComponent;
  public selectedCompIndex: number = 0;

  public framesChange = new EventEmitter<string>();

  public isPlaying: boolean = false;

  public isLoaded: boolean = false;

  private interval: any;

  
  public spriteWidth: number = 48;
  public spriteHeight: number = 48;
  public zoomFactor: number = 4;

  public texName: string = "";

  ngOnInit(): void {

    //this.model.frames = [];
    this.unloadChange.subscribe((value) => {
      if (value === true) {
        this.selected = -1;
        this.fileName = "";
        this.frames = [];
        this.isPlaying = false;
        this.isLoaded = false;
        this.texName = "";
        this.sheetName = "../../assets/soldof/images/settings.png";
        console.log("unloaded...");
        return;
      }

      if (this.model) {
        this.isLoaded = true;
        this.texName = "Artifacts/" + this.modelName + "/" + this.model.name;
        this.texName = this.texName.replace("-act", "");
        this.framesChange.emit(this.texName + ".json");
        console.log("loaded");
        
      }
      
    });

    this.framesChange.subscribe((url) => {
      console.log(url);
      this.service.GetData(url).subscribe((data) => {

        console.log(data);

        if (!data) return;
        //this.model = data;
        //if (!this.model) this.model = data;

        // if (!data) return;
        if (!this.model?.frames || this.model.frames.length == 0 || this.resetFrames) {
          let frames = Object.keys(data['frames']);

          if (this.resetFrames) this.frames = [];

          frames.forEach(fr => {
            let f = data['frames'][fr];
            f.name = this.cleanFrameName(fr);
            this.frames.push(f);

            if (this.model && !this.model?.frames) this.model.frames = [];

            // Not Found:
            let frameSearch = this.model?.frames.find(x => x.name == f.name);
            if (!frameSearch) {
              let modelFrame = new BehaviorAnimationFrame();
              modelFrame.name = f.name;
              modelFrame.duration = f.duration;
              modelFrame.frame = f;
              modelFrame.x = f.frame.x;
              modelFrame.y = f.frame.y;
              //this.frameWidth = (f.sourceSize.w * this.zoomFactor);
              this.model?.frames.push(modelFrame);
            } 
            else {
              frameSearch.duration = f.duration;
              frameSearch.frame = f;
              frameSearch.x = f.frame.x;
              frameSearch.y = f.frame.y;
            }

          });
          this.resetFrames = false;
        }
        else {
          this.frames = this.model?.frames ?? [];
        }

        if (this.model) this.model.framesJson = JSON.stringify(this.frames);


        //let texName = "Ase/" + this.modelName + "/" + this.model?.name;
        //this.texName = this.texName.replace("-act", "");
        this.sheetName = this.service.apiHost + this.texName + ".png";
        this.aseReady = true;

        this.selected = 0;
        this.selectedFrame = this.frames[0];
        this.selectedFrameChange.emit(this.selectedFrame);
        this.spriteWidth = this.frames[0].sourceSize.w;

        this.modelChange.emit(this.model);
        this.isLoaded = true;
      });
      // (error) => {
      //   console.log(error);
      //   this.sheetName = "../../assets/soldof/images/settings.png";
      //   this.aseReady = false;
      // });
    });

    this.unloadChange.emit(this.model == null);

  }

  public cleanAllFrameNames(): void {
    if (!this.model) return;

    this.model.frames.forEach(frame => {
      frame.name = this.cleanFrameName(frame.name);
    });
  }

  public cleanFrameName(name: string): string {
    return name.replace(".ase", "").trim().replace(" ", "_");
  }

  private resetFrames: boolean = false;

  public resetFramesFromAse(): void {
    this.resetFrames = true;
    this.framesChange.emit(this.texName + ".json");
  }

  public logModel() {
    console.log(this.model);
  }

  public openFrameOptionsMenu(): void {
    this.menuService.OpenDialog(SolacetkAnimationDialogComponent, { data: this.model });
  }

  // public addComponentToFrame() {

  //   if (this.selectedComponent) {
  //     console.log("Adding components to frame:");
  //     let componentData: SoltkKeyValue[] = BehaviorComponent.getStateValues(this.selectedComponent);
  //     console.log(componentData);
  //     let ind = 0;
  //     //this.selectedFrame.downstreamData = [...this.selectedFrame.downstreamData, ...event];
  //     componentData.forEach(pair => {
  //       if ((ind = this.selectedFrame.downstreamData.findIndex(x => x.key == pair.key)) == -1) {
  //         // Doesn't Exist, add it:
  //         this.selectedFrame.downstreamData = [...this.selectedFrame.downstreamData, pair];
  //       }
  //       // Data already exists
  //       else {
  //         this.selectedFrame.downstreamData[ind].data = pair.data;
  //       }
  //     });
  //     this.modelChange.emit(this.model);
  //   }

    
  // }

  // public onGetStateData(event: SoltkKeyValue[])
  // {
  //   // if (this.selectedComponent) {
  //     console.log("Adding components to frame:");
  //     //let componentData: SoltkKeyValue[] = BehaviorComponent.getStateValues(this.selectedComponent);
  //     //console.log(componentData);
  //     let ind = 0;
  //     //this.selectedFrame.downstreamData = [...this.selectedFrame.downstreamData, ...event];
  //     event.forEach(pair => {
  //       if ((ind = this.selectedFrame.downstreamData.findIndex(x => x.key == pair.key)) == -1) {
  //         // Doesn't Exist, add it:
  //         this.selectedFrame.downstreamData = [...this.selectedFrame.downstreamData, pair];
  //       }
  //       // Data already exists
  //       else {
  //         this.selectedFrame.downstreamData[ind].data = pair.data;
  //       }
  //     });
  //     this.modelChange.emit(this.model);
  //   // }
  // }

  ngAfterViewInit(): void {
    
  }

  playAnimation() {

    if (!this.model) return;

    if (this.selected == this.model.frames.length - 1) {
      this.selected = 0;
      this.selectedFrame = this.model.frames[this.selected];
      this.selectedFrameChange.emit(this.selectedFrame);
      if (this.components && this.components.length > 0) this.processComponents();
    }
    // if (this.soundService.IsClient) this.soundService.playAudio("map-link.wav");
    this.isPlaying = true;
    this.animate();
  }

  private run: boolean = true;
  animate() {
    let tempSpeed = (this.selectedFrame?.duration ?? 100) * (this.model?.speed ?? 1);
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
        this.selectedFrameChange.emit(this.selectedFrame);
        this.spriteWidth = this.selectedFrame.width;
        this.spriteHeight = this.selectedFrame.height;

        // Process Components:
        if (this.components && this.components.length > 0) this.processComponents();


        this.animate();

      }

    }, tempSpeed);
  }

  stopAnimation() {
    // if (this.soundService.IsClient) this.soundService.playAudio("map-unlink.wav");
    this.isPlaying = false;
  }

  onSelect(event: any) {
    if (this.model) {
      this.selected = this.frames.indexOf(event);
      this.selectedFrame = this.model.frames[this.selected];
      this.selectedFrameChange.emit(this.selectedFrame);
      if (!this.components || this.components.length == 0) return;

      // Process Components:
      this.processComponents();
    }
  }

  onComponentSelect(event: any) {
    if (this.model) {
      this.selectedCompIndex = this.components.indexOf(event);
      this.selectedComponent = this.components[this.selectedCompIndex];
      this.componentsChange.emit(this.components);
    }
  }

  loadDefaultComponents(): void {
    if (this.model) {
      if (!this.components) this.components = [];
      //this.model.components = [...this.model.components, ...BehaviorComponent.defaultComponents];
      this.modelChange.emit(this.model);
      this.componentsChange.emit(this.components);
    }
  }

  addComponent(): void {
    if (this.model) {
      if (!this.components) this.components = [];
      this.components = [...this.components, new SolTkComponent()];
      this.modelChange.emit(this.model);
      this.componentsChange.emit(this.components);
    }
  }

  removeComponent(component: SolTkComponent): void {
    if (this.model) {
      if (!this.components) this.components = [];
      this.components.splice(this.components.indexOf(component), 1);
      this.modelChange.emit(this.model);
      this.componentsChange.emit(this.components);
    }
  }

  processComponents(): void {
    if (!this.selectedFrame) return;

    this.selectedFrame.downstreamData.forEach(data => {

      if (data.key.includes(".")) {
        let keys = data.key.split(".");
        let component = this.components.find(x => x.name == keys[0]) as any;
        if (component) component[keys[1]] = data.data;
      }
    });
  }

  onAseSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {

      this.fileName = file.name;
      this.sheetName = "";
      const formData = new FormData();
      formData.append(this.modelName + ".ase", file);
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