import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MapTile } from '../../models/map-tile';
import { MapTileRule } from '../../models/map-tile-rule';

@Component({
  selector: 'solacetk-tile-rule-editor',
  templateUrl: './tile-rule-editor.component.html',
  styleUrls: ['./tile-rule-editor.component.css']
})
export class TileRuleEditorComponent implements OnInit {

  @Input() rules: MapTileRule[] = [];
  @Output() rulesChange = new EventEmitter<MapTileRule[]>();

  @Input() model: MapTile = new MapTile();
  @Output() modelChange = new EventEmitter<MapTile>();

  // # of Tiles in Dimension:
  public ruleEditorWidth: number = 3;
  public ruleEditorHeight: number = 3;
  public midHeight: number = 2;
  public midWidth: number = 2;
  public ruleEditorScale: number = 2;
  public ruleEditorTileSize: number = 16;

  public ruleColorKey: string = "";

  public selectedRule: MapTileRule = new MapTileRule();

  public selectedMode: number = 0;

  public checkTypes: string[] = MapTileRule.checkTypes;

  ngOnInit(): void {

    this.midHeight = Math.floor(this.ruleEditorHeight / 2);
    this.midWidth = Math.floor(this.ruleEditorWidth / 2);

    this.modelChange.subscribe((value) => {});

  }

  private loadRules(): MapTileRule[] {
    let exTile = -1;
    for (let y = -(this.midHeight); y < this.midHeight + 1; y++) {
      for (let x = -(this.midWidth); x < this.midWidth + 1; x++) {
        var rule = new MapTileRule();
        rule.vx = x;
        rule.vy = y;

        // Tile Rule Exists - Merge Data:
        if ((exTile = this.model.rules.findIndex(r => r.vx == x && r.vy == y)) >= 0) {
          rule = this.model.rules[exTile];

        }
        // Merge Existing Tiles into Editor:
        this.model.rules.push(rule);
        //this.model.rules = [...this.model.rules, rule];
      }
    }
    return [];
  }

  public ModeChange(change: MatButtonToggleChange): void {
    this.selectedMode = change.value;
  }
}
