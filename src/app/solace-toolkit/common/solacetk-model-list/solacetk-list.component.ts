import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'solacetk-model-list',
  templateUrl: './solacetk-list.component.html',
  styleUrls: ['./solacetk-list.component.css']
})
export class SolaceTKListComponent implements OnInit {

  public dataStruct: any[] = [];

  @Input() moduleName: string = "Solace TK Module";
  @Input() baseUrl: string = "http://localhost:5010/api/v1/";
  @Input() modelUri: string = "Controllers/movables";

  @Input() model!: any;
  @Output() modelChange = new EventEmitter<any>();

  @Output() modelCreate = new EventEmitter();
  @Output() modelClosed = new EventEmitter();
  @Output() modelSaved = new EventEmitter();
  @Output() modelLoaded = new EventEmitter();

  constructor(private http: HttpClient) { }

  public IsLoading = true;
  public modelSelected: boolean = false;
  public tabIndex: number = 0;

  public moduleIcon: string = "";
  public IsNewModel = false;

  ngOnInit(): void {
    this.moduleIcon = this.moduleName.replace(' ', '').toLowerCase() + ".png";
    this.RefreshView();
  }

  public RefreshView() {
    this.IsLoading = true;
    
    this.http.get<any[]>(this.baseUrl + this.modelUri).subscribe(response => 
      {
        console.log(response);
        this.dataStruct = [];
        this.dataStruct = response;

        console.log(this.dataStruct);
        //.map(item => 
          // {
          //   return item;
          // });

/*           let char = new Movablecontroller();
          char.affectedByGravity = item.affectedByGravity;
          char.canMove = item.canMove;
          char.collisionType = item.collisionType;
          char.description = item.description;
          char.id = item.id;
          char.mapPositionX = item.mapPositionX;
          char.mapPositionY = item.mapPositionY;
          char.mass = item.mass;
          char.name = item.name;
          char.pixelKeyColor = item.pixelKeyColor;
          char.speed = item.speed;
          char.useFriction = item.useFriction;
          char.worldPositionX = item.worldPositionX;
          char.worldPositionY = item.worldPositionY;
          char.worldPositionZ = item.worldPositionZ;
          char.type = item.type; */
  
          // Apply the DataSource changes:
          this.IsLoading = false;
      });
  }

  public LoadModel(model: any)
  {
    console.log(model);
    this.model = model;
    this.IsNewModel = false;
    this.modelSelected = true;
    this.modelChange.emit(this.model);
    this.modelLoaded.emit();
    this.tabIndex = 1;
  }

  public saveResponse: string = "";
  public IsSaving: boolean = false;
  public SaveModel()
  {
    //this.selectedModel = model;
    this.IsSaving = true;
    console.log(this.model);
    if (this.IsNewModel)
    {
      this.Create();
      this.http.post<any>(this.baseUrl + this.modelUri, this.model).subscribe((response) => {
        this.model = response;
        this.modelChange.emit(this.model);
        this.IsSaving = false;
        this.modelSaved.emit();
        this.dataStruct.push(response);
        this.IsNewModel = false;
      });
      
        return;
    }
    this.Save();   
    this.http.put<any>(this.baseUrl + this.modelUri + "/" + this.model.id, this.model).subscribe((response) => {
      this.model = response;
      this.modelChange.emit(this.model);
      this.IsSaving = false;
      this.modelSaved.emit();
    }); 
  }

  public ExportModel() {
    window.location.href = (this.baseUrl + this.modelUri  + "/" + this.model.id + "/export");
  }

  public NewModel()
  {
    this.IsNewModel = true;
    this.modelChange.emit({});
    this.modelCreate.emit();
    this.modelSelected = true;
    this.tabIndex = 1;
  }

  public CloseModel()
  {
    this.model = {};
    this.tabIndex = 0;
    this.modelSelected = false;
    this.modelClosed.emit();
    console.log(this.model);
  }

  public Load(): void{

  }
  public Create(): void{

  }
  public Save(): void{}
  public Refresh(): void{}
  public Close(): void{}


  applyFilter(filterValue: string) {

  }

}
