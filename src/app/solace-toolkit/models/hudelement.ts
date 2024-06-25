import { IModelTK } from "./imodel-tk";
import { SoltkKeyValue } from "./soltk-key-value";

export class HudElement implements IModelTK  {
    public id?: number = 0;
    public name: string = "HudElement";
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

    public type: HudElementType = HudElementType.StaticText;

    public width: number = 48;
    public height: number = 48;

    public data: SoltkKeyValue[] = [];

    public color?: string = "white";

    public textureRef?: string = "";
    public text?: string = "";
}

export enum HudElementType
{
    StaticText,
    DynamicText,
    Texture,
    List,
    Field,
    Gauge,
    Animation
}
