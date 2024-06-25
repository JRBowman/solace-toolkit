import { IModelTK } from "./imodel-tk";

export class Shape implements IModelTK {
    public id?: number = 0;
    public name?: string = "Shape";
    public description?: string = "";
    public tags?: string = "";

    public type: ShapeType = ShapeType.Rectangle;

    public originX: number = 0;
    public originY: number = 0;

    public width: number = 16;
    public height: number = 16;

    public points: ShapePoint[] = [];
}

export class ShapePoint {
    public id?: number;
    public x: number = 0;
    public y: number = 0;

    public enabled: boolean = false;
}

export enum ShapeType
{
    Rectangle,
    Circle,
    Square,
    Polygon,
    Edge,
    None,
}