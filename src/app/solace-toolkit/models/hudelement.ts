import { IModelTK } from "./imodel-tk";

export class HudElement implements IModelTK  {
    public id?: number = 0;
    public name: string = "";
    public description: string = "";
    public assemblyType: string = "";
    public tags: string = "";

    // Component Postioning Data:
    public positionX: number = 0;
    public positionY: number = 0;
    public positionZ: number = 0;

    public scaleX: number = 1;
    public scaleY: number = 1;
    public scaleZ: number = 1;

    public rotationX: number = 0;
    public rotationY: number = 0;
    public rotationZ: number = 0;

    public enabled: boolean = true;

    public imageResource: string = "";

    // public componentData: SoltkKeyValue[] = [];

    public color?: string = "white";
}
