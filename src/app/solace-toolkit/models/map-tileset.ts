import { MapTile } from "./map-tile";

export class MapTileset {
    public id?: string;
    public name?: string = "Map";
    public description?: string = "";
    public tags?: string = "";

    // TileSet Data:
    public tiles: MapTile[] = [];
}
