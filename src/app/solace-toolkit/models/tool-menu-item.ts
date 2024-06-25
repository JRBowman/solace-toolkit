import { IModelTK } from "./imodel-tk";

export class ToolMenu implements IModelTK {
    public id?: number = 0;
    public name?: string = "Module";
    public description?: string = "Modules enabled in the Tool";
    public tags?: string = "";
    
    public items: ToolMenuItem[] = [];
    public icon: string = "add";

}

export class ToolMenuItem implements IModelTK {
    public id?: number = 0;
    public name?: string = "SubModule";
    public description?: string = "Modules enabled in the Tool";
    public tags?: string = "";
    
    public icon?: string;
    public plateText: string = "Tk";
    public plateColor: string = "#901840"
    public route: string = "";


}
