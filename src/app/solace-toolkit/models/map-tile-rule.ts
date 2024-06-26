export class MapTileRule {
    public id?: number = 0;
    public name?: string;
    public description?: string = "";
    public tags?: string = "";

    // TileRule Data:
    public colorKey: string = "";
    public priority: number = 0;

    public direction: RuleDirection = RuleDirection.None;
    public checkType?: RuleCheckType = RuleCheckType.Disabled;

    // Postion Vector:
    public vx: number = 0;
    public vy: number = 0;
    public vm: number = 1;

    public enabled: boolean = false;

    public static readonly checkTypes: string[] = ["Disabled", "Empty", "Any", "This", "NotThis", "Named", "Key"];
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
    Disabled,
    Empty,
    Any,
    This,
    NotThis,
    Named,
    Key
}
