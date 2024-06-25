import { Artifact } from "./artifact";
import { MapTile } from "./map-tile";

export class MapTileset {
    public id?: number = 0;
    public name?: string = "Map";
    public description?: string = "";
    public tags?: string = "";

    // TileSet Data:
    public tiles: MapTile[] = [];

    public tileSize: number = 16;

    // Artifact Ref:
    public artifactId: number = 0;
    public artifact?: Artifact;
}
