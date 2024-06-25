import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Hud } from '../../models/hud';
import {HudElement} from '../../models/hudelement';
import { SoltkKeyValue } from '../../models/soltk-key-value';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'app-huds',
  templateUrl: './huds.component.html',
  styleUrls: ['./huds.component.css']
})
export class HudsComponent implements OnInit {

  constructor(public service:SolacetkService) { }

  public model: Hud = new Hud();

  public selectedElement: HudElement = new HudElement();

  public virtualScreenWidth: number = 320;
  public virtualScreenHeight: number = 180;

  public zoom: number = 4;

  public elementTypes: string[] = [ "StaticText", "DynamicText", "Texture", "List", "Field", "Gauge", "Animation" ];

  ngOnInit(): void {
    this.RedrawScene();
  }

  public AddElement(): void {
    this.model.elements = [...this.model.elements, new HudElement()];
  }

  public ElementDragEnd(cdk: CdkDragEnd<any>, value: HudElement): void
  {
    var translation = cdk.source.element.nativeElement.style.transform;
    var xyz = translation.substring(12, translation.length - 1).replace(/px/g, '').replace(/ /g, '').split(',');
    console.log(cdk);
    value.positionX = Math.round(Number(xyz[0]) + (cdk.source.element.nativeElement.clientWidth / 2));
    value.positionY = Math.round(Number(xyz[1]));
  }

  public RedrawScene(): void
  {
    this.model.elements.forEach(element => {
      element.text = element.data.find(x => x.key == 'Text')?.data ?? "";
      if (element.type == 2) element.textureRef = element.data.find(x => x.key == 'TextureRef')?.data ?? "";
    });
  }

  public TypeChanged(type: any): void
  {
    console.log(type);
    if (type.value == 0) this.selectedElement.data = this.StaticTextData();
    else if (type.value == 1) this.selectedElement.data = this.DynamicTextData();
    else if (type.value == 2) this.selectedElement.data = this.TextureData();
    else if (type.value == 3) this.selectedElement.data = this.ListData();
    else if (type.value == 4) this.selectedElement.data = this.FieldData();
    else if (type.value == 5) this.selectedElement.data = this.GaugeData();
    else if (type.value == 6) this.selectedElement.data = this.AnimationData();
  }

  public StaticTextData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];

    data.push({ key: "Text", operator: 0, data: "" });
    data.push({ key: "Text.Color", operator: 0, data: "#ffffff" });
    data.push({ key: "Text.Speed", operator: 0, data: "0.075", floatData: 0.075, type: 1 });
    data.push({ key: "Text.DisplayTime", operator: 0, data: "3", type: 1, floatData: 3 });
    data.push({ key: "Text.WaitTime", operator: 0, data: "", floatData: 0.075, type: 1 });
    data.push({ key: "Font", operator: 0, data: "Default" });
    data.push({ key: "Loop", operator: 0, data: "False" });
    data.push({ key: "Audio.WriteText", operator: 0, data: "" });
    data.push({ key: "Audio.WriteText.Volume", operator: 0, data: "1", floatData: 1, type: 1 });
    data.push({ key: "Audio.WriteText.PitchMin", operator: 0, data: "0", floatData: 0, type: 1 });
    data.push({ key: "Audio.WriteText.PitchMax", operator: 0, data: "0", floatData: 0, type: 1 });

    data.push({ key: "Audio.RemoveText", operator: 0, data: "" });
    data.push({ key: "Audio.RemoveText.Volume", operator: 0, data: "1", floatData: 1, type: 1 });
    data.push({ key: "Audio.RemoveText.PitchMin", operator: 0, data: "0", floatData: 0, type: 1 });
    data.push({ key: "Audio.RemoveText.PitchMax", operator: 0, data: "0", floatData: 0, type: 1 });

    return data;
  }

  public DynamicTextData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];

    data.push({ key: "Text.Color", operator: 0, data: "#ffffff" });
    data.push({ key: "Text.Speed", operator: 0, data: "", floatData: 0.075, type: 1 });
    data.push({ key: "Font", operator: 0, data: "Default" });
    data.push({ key: "TrackedEntity", operator: 0, data: "" });
    data.push({ key: "TrackedVariable", operator: 0, data: "" });
    data.push({ key: "TrackFreqeuncy", operator: 0, data: "" });

    return data;
  }

  public TextureData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];

    data.push({ key: "TextureRef", operator: 0, data: "" });
    data.push({ key: "TintColor", operator: 0, data: "#ffffff" });
    data.push({ key: "Effects[0]", operator: 0, data: "" });

    return data;
  }

  public ListData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];

    data.push({ key: "Text.Color", operator: 0, data: "#ffffff" });
    data.push({ key: "Text.Speed", operator: 0, data: "", type: 1 });
    data.push({ key: "Font", operator: 0, data: "Default" });
    data.push({ key: "TrackedEntity", operator: 0, data: "" });
    data.push({ key: "TrackedVariable", operator: 0, data: "" });
    data.push({ key: "TrackFreqeuncy", operator: 0, data: "" });

    return data;
  }

  public FieldData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];

    data.push({ key: "Text.Color", operator: 0, data: "" });
    data.push({ key: "Text.Speed", operator: 0, data: "" });
    data.push({ key: "Font", operator: 0, data: "" });
    data.push({ key: "TrackedEntity", operator: 0, data: "" });
    data.push({ key: "TrackedVariable", operator: 0, data: "" });
    data.push({ key: "TrackFreqeuncy", operator: 0, data: "" });

    return data;
  }

  public GaugeData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];

    data.push({ key: "Text.Color", operator: 0, data: "" });
    data.push({ key: "Text.Speed", operator: 0, data: "" });
    data.push({ key: "Font", operator: 0, data: "" });
    data.push({ key: "TrackedEntity", operator: 0, data: "" });
    data.push({ key: "TrackedVariable", operator: 0, data: "" });
    data.push({ key: "TrackFreqeuncy", operator: 0, data: "" });

    return data;
  }

  public AnimationData(): SoltkKeyValue[]
  {
    var data: SoltkKeyValue[] = [];

    data.push({ key: "Text.Color", operator: 0, data: "" });
    data.push({ key: "Text.Speed", operator: 0, data: "" });
    data.push({ key: "Font", operator: 0, data: "" });
    data.push({ key: "TrackedEntity", operator: 0, data: "" });
    data.push({ key: "TrackedVariable", operator: 0, data: "" });
    data.push({ key: "TrackFreqeuncy", operator: 0, data: "" });

    return data;
  }

}
