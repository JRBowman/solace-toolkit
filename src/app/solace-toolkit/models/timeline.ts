import { IModelTK } from "./imodel-tk";
import { StoryCard } from "./storycard";

export class Timeline implements IModelTK {
    public id?: string;
    public name?: string = "Timeline";
    public description?: string = "A Chronological sequence of StoryCards.";
    public tags?: string = "";

    public storyCards: StoryCard[] = [];
    public duration: number = 0;
}
