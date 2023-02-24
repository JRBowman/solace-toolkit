export class MapTileRule {
    public id?: string;
    public name?: string = "Map";
    public description?: string = "";
    public tags?: string = "";

    // TileRule Data:
    public colorKey: string = "";
    public priority: number = 0;

    public direction: RuleDirection = RuleDirection.None;
    public checkType: RuleCheckType = RuleCheckType.Empty;
}

export enum RuleDirection
{
    None = 0,
    Up = 1,
    Down = 2,
    Left = 3,
    LeftDown = 6,
    LeftUp = 8,
    Right = 4,
    RightDown = 5,
    RightUp = 7,

}

export enum RuleCheckType
{ 
    Empty,
    Any,
    This,
    Named,
    Key
}
