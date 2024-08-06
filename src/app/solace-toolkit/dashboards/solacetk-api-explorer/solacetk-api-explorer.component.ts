import { Component, OnInit } from '@angular/core';
import { SwaggerObjectTk } from '../../models/swagger-object-tk';
import { SwaggerPropertyTk } from '../../models/swagger-property-tk';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'solacetk-api-explorer',
  templateUrl: './solacetk-api-explorer.component.html',
  styleUrls: ['./solacetk-api-explorer.component.css']
})
export class SolacetkApiExplorerComponent implements OnInit {

  constructor(public service: SolacetkService) { }

  public oasData: any = {};
  // public oasUrl: string = window.origin + "/assets/swagger.json";
  public oasUrl: string = "./assets/swagger.json";
  public oasString: string = "";

  public components: any = {};
  public schemas: any[] = [];
  public schemaKeys: string[] = [];

  public swaggerObjects: SwaggerObjectTk[] = [];

  ngOnInit(): void {
    this.service.GetDataFromSource(this.oasUrl).subscribe((data) => {
      this.oasData = data;
      console.log(this.oasData);
      this.oasString = JSON.stringify(this.oasData);
      this.components = this.oasData["components"];
      this.schemaKeys = Object.keys(this.components.schemas);

      // Configure:
      this.schemaKeys.forEach(sk => {
        if (this.components.schemas[sk].type == "object" || this.components.schemas[sk].enum) {
          console.log(sk);
          let tempSO = new SwaggerObjectTk();
          tempSO.name = sk;
          tempSO.additionalProperties = this.components.schemas[sk].additionalProperties;
          tempSO.description = this.components.schemas[sk].description;
          tempSO.type = this.components.schemas[sk].type;
          tempSO.enum = this.components.schemas[sk].enum;
          if (tempSO.enum && tempSO.enum.length > 0) tempSO.type = "enum";

          // Build Properties:
          if (this.components.schemas[sk].properties) {
            let props = this.components.schemas[sk].properties;
            let keys = Object.keys(props);

            keys.forEach(k => {
              let tempProp = new SwaggerPropertyTk();
              tempProp.name = k;
              tempProp.description = props[k].description;
              tempProp.format = props[k].format;
              tempProp.nullable = props[k].nullable;
              tempProp.type = props[k].type;
              tempProp.items = [];
              if (Array.isArray(props[k].items)) tempProp.items = props[k].items;
              else if (props[k].items) tempProp.items.push(props[k].items["$ref"] ?? props[k].items["type"]);
              tempProp.ref = this.cleanString(props[k]["$ref"], '/', 0, true);
              if (!tempProp.type || tempProp.type.length == 0 && tempProp.ref) tempProp.type = "enum";
              tempSO.properties.push(tempProp);
            });
          }
          this.swaggerObjects.push(tempSO);
        }
      });
    });
  }

  public GetObjectPropertyString(key: string): string {
    return JSON.stringify(this.components.schemas[key].properties);
  }

  public cleanString(base: string, delim: string, take: number = 0, takeLast: boolean = false): string {
    if (!base || base.length == 0) return "";
    var temp = base.split(delim);
    return takeLast ? temp[temp.length - 1] : temp[take];
  }

  public GetPropertiesFromObject(key: string): any[] {
    let props = this.components.schemas[key].properties;

    let keys = Object.keys(props);
    let temp: any[] = [];

    keys.forEach(k => {
      temp.push(props[k]);
    });

    console.log(temp);

    return temp;
  }



}
