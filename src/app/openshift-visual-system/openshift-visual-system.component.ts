import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import * as go from 'gojs';
import { DataSyncService, DiagramComponent, PaletteComponent } from 'gojs-angular';
import produce from "immer";
import { CustomLink } from './custom-link';

@Component({
  selector: 'openshift-visual-system',
  templateUrl: './openshift-visual-system.component.html',
  styleUrls: ['./openshift-visual-system.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OpenshiftVisualSystemComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    //this.diagramModelChange(this.model);
    let dummydata = "{\"class\":\"GraphLinksModel\",\"linkKeyProperty\":\"key\",\"linkFromPortIdProperty\":\"fromPort\",\"linkToPortIdProperty\":\"toPort\",\"nodeDataArray\":[{\"name\":\"Console\",\"color\":\"#FF2828\",\"leftArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"l0\"},{\"portId\":\"Developer-l\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-l\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-l\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-l\",\"portColor\":\"#4A76FF\"}],\"rightArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"r0\"},{\"portId\":\"Developer-r\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-r\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-r\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-r\",\"portColor\":\"#4A76FF\"}],\"topArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"t0\"},{\"portId\":\"Developer-t\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-t\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-t\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-t\",\"portColor\":\"#4A76FF\"}],\"bottomArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"b0\"},{\"portId\":\"Developer-b\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-b\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-b\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-b\",\"portColor\":\"#4A76FF\"}],\"key\":-1,\"loc\":\"-100 20\"},{\"name\":\"API\",\"color\":\"#FF2828\",\"leftArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"l0\"},{\"portId\":\"Developer-l\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-l\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-l\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-l\",\"portColor\":\"#4A76FF\"}],\"rightArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"r0\"},{\"portId\":\"Developer-r\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-r\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-r\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-r\",\"portColor\":\"#4A76FF\"}],\"topArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"t0\"},{\"portId\":\"Developer-t\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-t\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-t\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-t\",\"portColor\":\"#4A76FF\"}],\"bottomArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"b0\"},{\"portId\":\"Developer-b\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-b\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-b\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-b\",\"portColor\":\"#4A76FF\"}],\"key\":-2,\"loc\":\"-100 190\"},{\"name\":\"Developer\",\"color\":\"#FF2828\",\"leftArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"l0\"},{\"portId\":\"Developer-l\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-l\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-l\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-l\",\"portColor\":\"#4A76FF\"}],\"rightArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"r0\"},{\"portId\":\"Developer-r\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-r\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-r\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-r\",\"portColor\":\"#4A76FF\"}],\"topArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"t0\"},{\"portId\":\"Developer-t\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-t\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-t\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-t\",\"portColor\":\"#4A76FF\"}],\"bottomArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"b0\"},{\"portId\":\"Developer-b\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-b\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-b\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-b\",\"portColor\":\"#4A76FF\"}],\"key\":-3,\"loc\":\"100 20\"},{\"name\":\"Network\",\"color\":\"#B92DFF\",\"leftArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"l0\"},{\"portId\":\"Developer-l\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-l\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-l\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-l\",\"portColor\":\"#4A76FF\"}],\"rightArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"r0\"},{\"portId\":\"Developer-r\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-r\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-r\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-r\",\"portColor\":\"#4A76FF\"}],\"topArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"t0\"},{\"portId\":\"Developer-t\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-t\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-t\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-t\",\"portColor\":\"#4A76FF\"}],\"bottomArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"b0\"},{\"portId\":\"Developer-b\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-b\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-b\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-b\",\"portColor\":\"#4A76FF\"}],\"key\":-4,\"loc\":\"10 400\"},{\"name\":\"Compute\",\"color\":\"#622DFF\",\"leftArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"l0\"},{\"portId\":\"Developer-l\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-l\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-l\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-l\",\"portColor\":\"#4A76FF\"}],\"rightArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"r0\"},{\"portId\":\"Developer-r\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-r\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-r\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-r\",\"portColor\":\"#4A76FF\"}],\"topArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"t0\"},{\"portId\":\"Developer-t\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-t\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-t\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-t\",\"portColor\":\"#4A76FF\"}],\"bottomArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"b0\"},{\"portId\":\"Developer-b\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-b\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-b\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-b\",\"portColor\":\"#4A76FF\"}],\"key\":-5,\"loc\":\"-200 400\"},{\"name\":\"Storage\",\"color\":\"#FF2DD0\",\"leftArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"l0\"},{\"portId\":\"Developer-l\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-l\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-l\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-l\",\"portColor\":\"#4A76FF\"}],\"rightArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"r0\"},{\"portId\":\"Developer-r\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-r\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-r\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-r\",\"portColor\":\"#4A76FF\"}],\"topArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"t0\"},{\"portId\":\"Developer-t\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-t\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-t\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-t\",\"portColor\":\"#4A76FF\"}],\"bottomArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"b0\"},{\"portId\":\"Developer-b\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-b\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-b\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-b\",\"portColor\":\"#4A76FF\"}],\"key\":-6,\"loc\":\"210 400\"},{\"name\":\"Security\",\"color\":\"#2D7FFF\",\"leftArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"l0\"},{\"portId\":\"Developer-l\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-l\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-l\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-l\",\"portColor\":\"#4A76FF\"}],\"rightArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"r0\"},{\"portId\":\"Developer-r\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-r\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-r\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-r\",\"portColor\":\"#4A76FF\"}],\"topArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"t0\"},{\"portId\":\"Developer-t\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-t\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-t\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-t\",\"portColor\":\"#4A76FF\"}],\"bottomArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"b0\"},{\"portId\":\"Developer-b\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-b\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-b\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-b\",\"portColor\":\"#4A76FF\"}],\"key\":-7,\"loc\":\"100 190\"},{\"name\":\"Pipelines\",\"color\":\"#FFC300\",\"leftArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"l0\"},{\"portId\":\"Developer-l\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-l\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-l\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-l\",\"portColor\":\"#4A76FF\"}],\"rightArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"r0\"},{\"portId\":\"Developer-r\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-r\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-r\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-r\",\"portColor\":\"#4A76FF\"}],\"topArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"t0\"},{\"portId\":\"Developer-t\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-t\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-t\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-t\",\"portColor\":\"#4A76FF\"}],\"bottomArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"b0\"},{\"portId\":\"Developer-b\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-b\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-b\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-b\",\"portColor\":\"#4A76FF\"}],\"key\":-8,\"loc\":\"470 110\"},{\"name\":\"Catalog\",\"color\":\"#FF892D\",\"leftArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"l0\"},{\"portId\":\"Developer-l\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-l\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-l\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-l\",\"portColor\":\"#4A76FF\"}],\"rightArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"r0\"},{\"portId\":\"Developer-r\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-r\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-r\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-r\",\"portColor\":\"#4A76FF\"}],\"topArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"t0\"},{\"portId\":\"Developer-t\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-t\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-t\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-t\",\"portColor\":\"#4A76FF\"}],\"bottomArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"b0\"},{\"portId\":\"Developer-b\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-b\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-b\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-b\",\"portColor\":\"#4A76FF\"}],\"key\":-9,\"loc\":\"290 -90\"},{\"name\":\"Operators\",\"color\":\"#2DFFA4\",\"leftArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"l0\"},{\"portId\":\"Developer-l\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-l\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-l\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-l\",\"portColor\":\"#4A76FF\"}],\"rightArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"r0\"},{\"portId\":\"Developer-r\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-r\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-r\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-r\",\"portColor\":\"#4A76FF\"}],\"topArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"t0\"},{\"portId\":\"Developer-t\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-t\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-t\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-t\",\"portColor\":\"#4A76FF\"}],\"bottomArray\":[{\"portColor\":\"#fae3d7\",\"portId\":\"b0\"},{\"portId\":\"Developer-b\",\"portColor\":\"#4AFF56\"},{\"portId\":\"Operations-b\",\"portColor\":\"#4AF6FF\"},{\"portId\":\"Platform-b\",\"portColor\":\"#FF4A4A\"},{\"portId\":\"Kubernetes-b\",\"portColor\":\"#4A76FF\"}],\"key\":-10,\"loc\":\"290 190\"}],\"linkDataArray\":[{\"from\":-1,\"to\":-2,\"fromPort\":\"b0\",\"toPort\":\"t0\",\"key\":-38,\"points\":[-120,66,-120,108,-120,108,-120,102,-120,102,-120,144]},{\"from\":-1,\"to\":-3,\"fromPort\":\"Developer-r\",\"toPort\":\"Developer-l\",\"key\":-11,\"points\":[-54,10,-20,10,16,10,16,10,20,10,54,10]},{\"from\":-1,\"to\":-3,\"fromPort\":\"Operations-r\",\"toPort\":\"Operations-l\",\"key\":-12,\"points\":[-54,20,-28,20,16,20,16,20,28,20,54,20]},{\"from\":-1,\"to\":-2,\"fromPort\":\"Platform-b\",\"toPort\":\"Platform-t\",\"key\":-26,\"points\":[-90,66,-90,84,-90,105,-90,105,-90,126,-90,144]},{\"from\":-2,\"to\":-7,\"fromPort\":\"Platform-r\",\"toPort\":\"Platform-l\",\"key\":-13,\"points\":[-54,200,-36,200,16,200,16,200,36,200,54,200]},{\"from\":-2,\"to\":-7,\"fromPort\":\"Kubernetes-r\",\"toPort\":\"Kubernetes-l\",\"key\":-14,\"points\":[-54,210,-44,210,16,210,16,210,44,210,54,210]},{\"from\":-2,\"to\":-7,\"fromPort\":\"r0\",\"toPort\":\"l0\",\"key\":-16,\"points\":[-54,170,-12,170,16,170,16,170,12,170,54,170]},{\"from\":-2,\"to\":-7,\"fromPort\":\"Developer-r\",\"toPort\":\"Developer-l\",\"key\":-18,\"points\":[-54,180,-20,180,16,180,16,180,20,180,54,180]},{\"from\":-2,\"to\":-7,\"fromPort\":\"Operations-r\",\"toPort\":\"Operations-l\",\"key\":-19,\"points\":[-54,190,-28,190,16,190,16,190,28,190,54,190]},{\"from\":-2,\"to\":-10,\"fromPort\":\"Kubernetes-b\",\"toPort\":\"Kubernetes-b\",\"key\":-42,\"points\":[-80,236,-80,246,-80,282,115,282,310,282,310,236]},{\"from\":-3,\"to\":-7,\"fromPort\":\"Developer-b\",\"toPort\":\"Developer-t\",\"key\":-46,\"points\":[90,66,90,100,90,105,90,105,90,110,90,144]},{\"from\":-3,\"to\":-7,\"fromPort\":\"Operations-b\",\"toPort\":\"Operations-t\",\"key\":-47,\"points\":[100,66,100,92,100,105,100,105,100,118,100,144]},{\"from\":-1,\"to\":-3,\"fromPort\":\"r0\",\"toPort\":\"l0\",\"key\":-54,\"points\":[-54,0,-12,0,16,0,16,0,12,0,54,0]},{\"from\":-3,\"to\":-7,\"fromPort\":\"b0\",\"toPort\":\"t0\",\"key\":-61,\"points\":[80,66,80,108,80,108,80,102,80,102,80,144]},{\"from\":-10,\"to\":-8,\"fromPort\":\"r0\",\"toPort\":\"b0\",\"key\":-63,\"points\":[336,170,350,170,450,170,450,170,450,170,450,156]},{\"from\":-10,\"to\":-8,\"fromPort\":\"Platform-r\",\"toPort\":\"Platform-b\",\"key\":-64,\"points\":[336,200,374,200,480,200,480,197,480,194,480,156]},{\"from\":-3,\"to\":-10,\"fromPort\":\"Operations-r\",\"toPort\":\"Operations-t\",\"key\":-68,\"points\":[146,20,172,20,290,20,290,67,290,114,290,144]},{\"from\":-3,\"to\":-10,\"fromPort\":\"Developer-r\",\"toPort\":\"Developer-t\",\"key\":-69,\"points\":[146,10,180,10,280,10,280,66,280,122,280,144]},{\"from\":-3,\"to\":-9,\"fromPort\":\"r0\",\"toPort\":\"b0\",\"key\":-50,\"points\":[146,0,160,0,270,0,270,-15,270,-30,270,-44]},{\"from\":-10,\"to\":-9,\"fromPort\":\"t0\",\"toPort\":\"b0\",\"key\":-51,\"points\":[270,144,270,102,270,50,270,50,270,-2,270,-44]},{\"from\":-3,\"to\":-9,\"fromPort\":\"Developer-r\",\"toPort\":\"Developer-b\",\"key\":-37,\"points\":[146,10,168,10,280,10,280,-6,280,-22,280,-44]},{\"from\":-3,\"to\":-9,\"fromPort\":\"Operations-r\",\"toPort\":\"Operations-b\",\"key\":-44,\"points\":[146,20,176,20,290,20,290,3,290,-14,290,-44]},{\"from\":-9,\"to\":-8,\"fromPort\":\"b0\",\"toPort\":\"l0\",\"key\":-36,\"points\":[270,-44,270,-2,270,90,340,90,410,90,424,90]},{\"from\":-3,\"to\":-8,\"fromPort\":\"Operations-b\",\"toPort\":\"Operations-l\",\"key\":-29,\"points\":[100,66,100,92,100,110,247,110,394,110,424,110]},{\"from\":-3,\"to\":-8,\"fromPort\":\"Developer-b\",\"toPort\":\"Developer-l\",\"key\":-31,\"points\":[90,66,90,100,294,100,294,100,402,100,424,100]},{\"from\":-2,\"to\":-8,\"fromPort\":\"t0\",\"toPort\":\"l0\",\"key\":-32,\"points\":[-120,144,-120,102,-120,90,131,90,382,90,424,90]},{\"from\":-1,\"to\":-3,\"fromPort\":\"Platform-r\",\"toPort\":\"Platform-l\",\"key\":-30,\"points\":[-54,30,-36,30,16,30,16,30,36,30,54,30]},{\"from\":-7,\"to\":-10,\"fromPort\":\"r0\",\"toPort\":\"l0\",\"key\":-33,\"points\":[146,170,188,170,211,170,211,170,202,170,244,170]},{\"from\":-7,\"to\":-10,\"fromPort\":\"Platform-r\",\"toPort\":\"Platform-l\",\"key\":-34,\"points\":[146,200,164,200,211,200,211,200,226,200,244,200]},{\"from\":-1,\"to\":-5,\"fromPort\":\"Operations-l\",\"toPort\":\"Operations-t\",\"key\":-73,\"points\":[-146,20,-172,20,-200,20,-200,174,-200,328,-200,354]},{\"from\":-1,\"to\":-5,\"fromPort\":\"l0\",\"toPort\":\"t0\",\"key\":-74,\"points\":[-146,0,-188,0,-220,0,-220,156,-220,312,-220,354]},{\"from\":-1,\"to\":-4,\"fromPort\":\"Operations-r\",\"toPort\":\"Operations-t\",\"key\":-62,\"points\":[-54,20,-28,20,10,20,10,172,10,324,10,354]},{\"from\":-1,\"to\":-4,\"fromPort\":\"Developer-r\",\"toPort\":\"Developer-t\",\"key\":-65,\"points\":[-54,10,-20,10,0,10,0,171,0,332,0,354]},{\"from\":-1,\"to\":-4,\"fromPort\":\"r0\",\"toPort\":\"t0\",\"key\":-66,\"points\":[-54,0,-12,0,-10,0,-10,170,-10,340,-10,354]},{\"from\":-10,\"to\":-8,\"fromPort\":\"Kubernetes-r\",\"toPort\":\"Kubernetes-b\",\"key\":-76,\"points\":[336,210,382,210,490,210,490,206,490,202,490,156]},{\"from\":-7,\"to\":-10,\"fromPort\":\"Kubernetes-r\",\"toPort\":\"Kubernetes-l\",\"key\":-77,\"points\":[146,210,156,210,211,210,211,210,234,210,244,210]},{\"from\":-3,\"to\":-6,\"fromPort\":\"Developer-r\",\"toPort\":\"Developer-t\",\"key\":-48,\"points\":[146,10,180,10,200,10,200,171,200,332,200,354]},{\"from\":-3,\"to\":-6,\"fromPort\":\"Operations-r\",\"toPort\":\"Operations-t\",\"key\":-52,\"points\":[146,20,172,20,210,20,210,172,210,324,210,354]},{\"from\":-2,\"to\":-5,\"fromPort\":\"Platform-b\",\"toPort\":\"Platform-r\",\"key\":-41,\"points\":[-90,236,-90,274,-90,410,-103,410,-116,410,-154,410]},{\"from\":-2,\"to\":-4,\"fromPort\":\"Platform-b\",\"toPort\":\"Platform-l\",\"key\":-43,\"points\":[-90,236,-90,254,-90,410,-82,410,-74,410,-36,410]},{\"from\":-2,\"to\":-4,\"fromPort\":\"Operations-b\",\"toPort\":\"Operations-l\",\"key\":-53,\"points\":[-100,236,-100,262,-100,400,-83,400,-66,400,-36,400]},{\"from\":-2,\"to\":-5,\"fromPort\":\"Operations-b\",\"toPort\":\"Operations-r\",\"key\":-55,\"points\":[-100,236,-100,266,-100,400,-112,400,-124,400,-154,400]},{\"from\":-9,\"to\":-2,\"fromPort\":\"b0\",\"toPort\":\"t0\",\"key\":-56,\"points\":[270,-44,270,-30,270,-28,270,-28,270,76,-120,76,-120,102,-120,144]},{\"from\":-2,\"to\":-6,\"fromPort\":\"Platform-b\",\"toPort\":\"Platform-b\",\"key\":-58,\"points\":[-90,236,-90,254,-90,484,65,484,220,484,220,446]},{\"from\":-2,\"to\":-8,\"fromPort\":\"Developer-t\",\"toPort\":\"Developer-l\",\"key\":-57,\"points\":[-110,144,-110,110,-110,100,140,100,390,100,424,100]},{\"from\":-2,\"to\":-8,\"fromPort\":\"Operations-t\",\"toPort\":\"Operations-l\",\"key\":-59,\"points\":[-100,144,-100,118,-100,110,149,110,398,110,424,110]},{\"from\":-2,\"to\":-5,\"fromPort\":\"b0\",\"toPort\":\"r0\",\"key\":-60,\"points\":[-120,236,-120,250,-120,380,-130,380,-140,380,-154,380]},{\"from\":-2,\"to\":-10,\"fromPort\":\"Platform-b\",\"toPort\":\"Platform-b\",\"key\":-67,\"points\":[-90,236,-90,254,-90,274,105,274,300,274,300,236]},{\"from\":-2,\"to\":-4,\"fromPort\":\"Kubernetes-b\",\"toPort\":\"Kubernetes-l\",\"key\":-49,\"points\":[-80,236,-80,246,-80,312,-82,312,-82,420,-36,420]},{\"from\":-2,\"to\":-5,\"fromPort\":\"Kubernetes-b\",\"toPort\":\"Kubernetes-r\",\"key\":-70,\"points\":[-80,236,-80,282,-80,420,-94,420,-108,420,-154,420]},{\"from\":-2,\"to\":-6,\"fromPort\":\"Kubernetes-b\",\"toPort\":\"Kubernetes-b\",\"key\":-71,\"points\":[-80,236,-80,246,-80,492,75,492,230,492,230,446]},{\"from\":-2,\"to\":-8,\"fromPort\":\"Platform-b\",\"toPort\":\"Platform-b\",\"key\":-72,\"points\":[-90,236,-90,254,480,254,480,224,480,194,480,156]}]}";
    this.model = go.GraphLinksModel.fromJson(dummydata) as go.GraphLinksModel;
  }

  public model: go.GraphLinksModel = new go.GraphLinksModel();

  @ViewChild('ocpVisual', { static: true })
  public myDiagramComponent!: DiagramComponent;

  public state = {
    diagramNodeData: this.model.nodeDataArray,
    diagramLinkData: this.model.linkDataArray,
    diagramModelData: this.model,
    skipsDiagramUpdate: false,
  };

  public diagramDivClassName: string = 'ocpVisual';

  // initialize diagram / templates
  public initDiagram(): go.Diagram {
    const $ = go.GraphObject.make;
    const portSize = new go.Size(8, 8);

    const dia = $(go.Diagram, {
      'undoManager.isEnabled': false,
      allowMove: true,
      //model: this.model
      hasVerticalScrollbar: false,
      hasHorizontalScrollbar: false,
      'draggingTool.isGridSnapEnabled': true,
      model: $(go.GraphLinksModel,
        {
          nodeKeyProperty: 'key',
          linkToPortIdProperty: 'toPort',
          linkFromPortIdProperty: 'fromPort',
          linkKeyProperty: 'key' // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
        }
      )
    });

    //dia.model = this.model;

    // define the Node template:
    dia.nodeTemplate =
      $(go.Node, "Table",
        {
          locationObjectName: "BODY",
          locationSpot: go.Spot.Center,
          selectionObjectName: "BODY",
          //contextMenu: nodeMenu
          movable: true,
          selectable: true,
          
        },
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),

        // the body
        $(go.Panel, "Auto",
          {
            row: 1, column: 1, name: "BODY",
            stretch: go.GraphObject.Fill
          },
          $(go.Shape, "Rectangle",
            {
              fill: null, stroke: null, strokeWidth: 4,
              minSize: new go.Size(72, 72)
            }, new go.Binding("stroke", "color").makeTwoWay()),
          $(go.TextBlock,
            { margin: -2, textAlign: "center", font: "bold 10px Segoe UI,sans-serif", stroke: "#FFFFFF", editable: true },
            new go.Binding("text", "name").makeTwoWay())
        ),  // end Auto Panel body
          // the Panel holding the left port elements, which are themselves Panels,
        // created for each item in the itemArray, bound to data.leftArray
        $(go.Panel, "Vertical",
          new go.Binding("itemArray", "leftArray"),
          {
            row: 1, column: 0,
            itemTemplate:
              $(go.Panel,
                {
                  _side: "left",  // internal property to make it easier to tell which side it's on
                  fromSpot: go.Spot.Left, toSpot: go.Spot.Left,
                  fromLinkable: true, toLinkable: true, cursor: "pointer",
                  //contextMenu: portMenu
                },
                new go.Binding("portId", "portId"),
                $(go.Shape, "Rectangle",
                  {
                    stroke: null, strokeWidth: 0,
                    desiredSize: portSize,
                    margin: new go.Margin(1, 0)
                  },
                  new go.Binding("fill", "portColor"))
              )  // end itemTemplate
          }
        ),  // end Vertical Panel

        // the Panel holding the top port elements, which are themselves Panels,
        // created for each item in the itemArray, bound to data.topArray
        $(go.Panel, "Horizontal",
          new go.Binding("itemArray", "topArray"),
          {
            row: 0, column: 1,
            itemTemplate:
              $(go.Panel,
                {
                  _side: "top",
                  fromSpot: go.Spot.Top, toSpot: go.Spot.Top,
                  fromLinkable: true, toLinkable: true, cursor: "pointer",
                  //contextMenu: portMenu
                },
                new go.Binding("portId", "portId"),
                $(go.Shape, "Rectangle",
                  {
                    stroke: null, strokeWidth: 0,
                    desiredSize: portSize,
                    margin: new go.Margin(0, 1)
                  },
                  new go.Binding("fill", "portColor"))
              )  // end itemTemplate
          }
        ),  // end Horizontal Panel

        // the Panel holding the right port elements, which are themselves Panels,
        // created for each item in the itemArray, bound to data.rightArray
        $(go.Panel, "Vertical",
          new go.Binding("itemArray", "rightArray"),
          {
            row: 1, column: 2,
            itemTemplate:
              $(go.Panel,
                {
                  _side: "right",
                  fromSpot: go.Spot.Right, toSpot: go.Spot.Right,
                  fromLinkable: true, toLinkable: true, cursor: "pointer",
                  //contextMenu: portMenu
                },
                new go.Binding("portId", "portId"),
                $(go.Shape, "Rectangle",
                  {
                    stroke: null, strokeWidth: 0,
                    desiredSize: portSize,
                    margin: new go.Margin(1, 0)
                  },
                  new go.Binding("fill", "portColor"))
              )  // end itemTemplate
          }
        ),  // end Vertical Panel

        // the Panel holding the bottom port elements, which are themselves Panels,
        // created for each item in the itemArray, bound to data.bottomArray
        $(go.Panel, "Horizontal",
          new go.Binding("itemArray", "bottomArray"),
          {
            row: 2, column: 1,
            itemTemplate:
              $(go.Panel,
                {
                  _side: "bottom",
                  fromSpot: go.Spot.Bottom, toSpot: go.Spot.Bottom,
                  fromLinkable: true, toLinkable: true, cursor: "pointer",
                  //contextMenu: portMenu
                },
                new go.Binding("portId", "portId"),
                $(go.Shape, "Rectangle",
                  {
                    stroke: null, strokeWidth: 0,
                    desiredSize: portSize,
                    margin: new go.Margin(0, 1)
                  },
                  new go.Binding("fill", "portColor"))
              )  // end itemTemplate
          }
        )  // end Horizontal Panel
      );  // end Node

    // an orthogonal link template, reshapable and relinkable
    dia.linkTemplate =
      $(CustomLink,
        {
          routing: go.Link.AvoidsNodes,
          corner: 4,
          curve: go.Link.JumpGap,
          
        },
        new go.Binding("points").makeTwoWay(),
        $(go.Shape, { strokeWidth: 2 }, 
        new go.Binding("stroke", "fromPort", p => p.data['portColor']).ofObject())
      );

    // support double-clicking in the background to add a copy of this data as a node
    dia.toolManager.clickCreatingTool.archetypeNodeData = {
      name: "OCP Component",
      leftArray: [{"portColor":"#fae3d7", "portId":"l0"} ],
      rightArray: [{"portColor":"#fae3d7", "portId":"r0"} ],
      topArray: [{"portColor":"#fae3d7", "portId":"t0"} ],
      bottomArray: [{"portColor":"#fae3d7", "portId":"b0"} ]
    };
    return dia;
  }

  public load() {
    //let data = go.Model.fromJson(this.dummydata);
    //this.state.diagramModelData = data;
    console.log(this.myDiagramComponent);
    this.myDiagramComponent.diagram.model = this.model;
  }

  public Save() {
    console.log(this.model.toJson());
  }

  public AddPort(portId: string, portColor: string) {
    this.model.startTransaction("addPort");

    this.myDiagramComponent.diagram.nodes.each(node => {
      this.pushPort("-l", node.data['leftArray'], portId, portColor);
      this.pushPort("-r", node.data['rightArray'], portId, portColor);
      this.pushPort("-b", node.data['bottomArray'], portId, portColor);
      this.pushPort("-t", node.data['topArray'], portId, portColor);
    });

    this.model.commitTransaction("addPort");
  }

  public pushPort(side: any, arr: any[], portId: string, portColor: string){
    let tempName = portId + side;
    if (arr && arr.findIndex(x => x.portId === tempName) === -1) {
      let port = {
        portId: portId + side,
        portColor: portColor
      };

      this.model.insertArrayItem(arr, -1, port);
    }
  }


  public defaultPorts = [ 
    { portId: "Developer", portColor: "#4AFF56" },
    { portId: "Operations", portColor: "#4AF6FF" },
    //{ portId: "Security", portColor: "#604AFF" },
    //{ portId: "DevOps", portColor: "#FF4AE9" },
    { portId: "Platform", portColor: "#FF4A4A" },
    //{ portId: "Operators", portColor: "#FFB74A" },
    { portId: "Kubernetes", portColor: "#4A76FF" }
  ];
  public AddDefaultNodeTypes() {
    this.defaultPorts.forEach(dPort => {
      this.AddPort(dPort.portId, dPort.portColor);
    });
  }

  public diagramModelChange = (changes: go.IncrementalData) => {
    console.log(changes);
    // see gojs-angular-basic for an example model changed handler that preserves immutability
    // when setting state, be sure to set skipsDiagramUpdate: true since GoJS already has this update
    const appComp = this;
    this.state = produce(this.state, draft => {
      // set skipsDiagramUpdate: true since GoJS already has this update
      // this way, we don't log an unneeded transaction in the Diagram's undoManager history
      draft.skipsDiagramUpdate = true;
      //draft.diagramNodeData = DataSyncService.syncNodeData(changes, draft.diagramNodeData, appComp.model);
      //draft.diagramLinkData = DataSyncService.syncLinkData(changes, draft.diagramLinkData, appComp.model);
      //draft.diagramModelData = DataSyncService.syncModelData(changes, draft.diagramModelData);
    });
  };

}
