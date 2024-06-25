import { Component, Input, OnInit } from '@angular/core';
import { ToolMenu, ToolMenuItem } from '../../models/tool-menu-item';

@Component({
  selector: 'solacetk-toolnav-extended',
  templateUrl: './solacetk-toolnav-extended.component.html',
  styleUrls: ['./solacetk-toolnav-extended.component.css']
})
export class SolacetkToolnavExtendedComponent implements OnInit {

  @Input() toolbarIntegrated: boolean = false;
  @Input() toolbarDirection: string = "horizontal";

  public toolsList: ToolMenu[] = [];

  public toolNavStyle = "top-nav mat-elevation-z2";
  public toolNavColor = "accent";

  constructor() {
    this.toolsList.push(this.createToolMenu("CORE", "account_tree", [
      { name: "Entities", abv: "En", route: "entities", color: "#10c010" },
      { name: "Game Systems", abv: "Ga", route: "gamesystems", color: "#10c010" },
      { name: "Resource Collections", abv: "Rc", route: "resourcecollections", color: "#10c010" }
    ]));
    this.toolsList.push(this.createToolMenu("STORY", "wysiwyg", [
      { name: "Timelines", abv: "Ti", route: "timelines", color: "#10c080" },
      // { name: "StoryCards", abv: "Sc", route: "storycards", color: "#10c080" },
      { name: "Lore", abv: "Le", route: "lore", color: "#10c080" },
      { name: "Dialogue", abv: "Dl", route: "dialogue", color: "#10c080" },
    ]));
    this.toolsList.push(this.createToolMenu("BEHAVIORS", "memory", [
      { name: "Systems", abv: "Be", route: "behaviorsystems", color: "#1080c0" },
      { name: "Branches", abv: "Br", route: "branches", color: "#1080c0" },
      { name: "States", abv: "St", route: "states", color: "#1080c0" },
      { name: "Animations", abv: "An", route: "animations", color: "#1080c0" }
    ]));
    this.toolsList.push(this.createToolMenu("EVENTS", "bolt", [
      { name: "Hubs", abv: "Eh", route: "hubs", color: "#c01060"},
      { name: "Events", abv: "Ev", route: "events", color: "#c01060" },
      // { name: "Messages", abv: "Me", route: "messages", color: "#c01060" }
    ]));
    this.toolsList.push(this.createToolMenu("ENVIRONMENTS", "architecture", [
      { name: "Maps", abv: "Ma", route: "maps", color: "#c06010" },
      { name: "TileSets", abv: "Ti", route: "tilesets", color: "#c06010" }
    ]));
    this.toolsList.push(this.createToolMenu("INTERFACES", "branding_watermark", [
      { name: "Huds", abv: "Hu", route: "huds", color: "#3020c0" },
      // { name: "Elements", abv: "El", route: "hudelements", color: "#3020c0" },
      { name: "Menus", abv: "Me", route: "hudmenus", color: "#3020c0" },
      { name: "Dialogs", abv: "Di", route: "huddialogs", color: "#3020c0" }
    ]));
    this.toolsList.push(this.createToolMenu("SOUNDS", "equalizer", [
      { name: "Sound Sets", abv: "Se", route: "soundsets", color: "#c01060" },
      { name: "Sound Sources", abv: "So", route: "soundsources", color: "#c01060" }
    ]));
    this.toolsList.push(this.createToolMenu("EFFECTS", "lens_blur", [
      { name: "Effect Collections", abv: "Ec", route: "effectcollections", color: "#c01060" },
      { name: "Particle Systems", abv: "Ps", route: "particlesystems", color: "#c01060" }
    ]));
  }

  ngOnInit(): void {
    if (this.toolbarIntegrated) {
      this.toolNavStyle = "top-nav mat-elevation-z0";
      this.toolNavColor = "primary";
    }
  }

  public createToolMenu(name: string, icon: string, items: any[]): ToolMenu {
    var menu = new ToolMenu();
    menu.name = name;
    menu.icon = icon;

    items.forEach((value) => {
      menu.items.push(this.createToolMenuItem(value.name, value.abv, value.route, value.color));
    });

    return menu;
  }

  public createToolMenuItem(name: string, abv: string, route: string, color: string): ToolMenuItem {
    var menuItem = new ToolMenuItem();
    menuItem.name = name;
    menuItem.route = route;
    menuItem.plateText = abv;
    menuItem.plateColor = color;

    return menuItem;
  }

}
