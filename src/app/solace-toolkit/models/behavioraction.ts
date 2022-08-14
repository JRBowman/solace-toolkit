export class BehaviorAction {
    public id?: string;
    public name?: string;
    public description?: string;
    public tags?: string = "";

    public stateId?: string;
    public startAction?: string;
    public mainAction?: string;
    public endAction?: string;
}
