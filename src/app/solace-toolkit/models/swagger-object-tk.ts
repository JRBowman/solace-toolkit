import { SwaggerPropertyTk } from "./swagger-property-tk";

export class SwaggerObjectTk {

    public name: string = "";
    public description: string = "";
    public type: string = "object";
    public additionalProperties: boolean = false;
    public properties: SwaggerPropertyTk[] = [];
    public enum?: any[];

}
