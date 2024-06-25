import { Component, Input, OnInit } from '@angular/core';
import { ToolMenu, ToolMenuItem } from '../../models/tool-menu-item';

@Component({
  selector: 'solacetk-sidenav-extended',
  templateUrl: './solacetk-sidenav-extended.component.html',
  styleUrls: ['./solacetk-sidenav-extended.component.css']
})
export class SolacetkSidenavExtendedComponent implements OnInit{


  public toolNavStyle = "top-nav mat-elevation-z2";
  public toolNavColor = "accent";

  public toolsList: ToolMenu[] = [];

  constructor() { 
    this.toolsList.push(this.createToolMenu("CORE", "account_tree", [
      { name: "Game Systems", abv: "Ga", route: "gamesystems" },
      { name: "Resource Collections", abv: "Ga", route: "resourcecollections" }
    ]));
    this.toolsList.push(this.createToolMenu("STORY", "wysiwyg", [
      { name: "Timelines", abv: "Ga", route: "timelines" },
      { name: "StoryCards", abv: "Ga", route: "storycards" }
    ]));
    this.toolsList.push(this.createToolMenu("BEHAVIORS", "memory", [
      { name: "Controllers", abv: "Co", route: "characters" },
      { name: "Systems", abv: "Be", route: "behaviors" },
      { name: "Branches", abv: "Br", route: "branches" },
      { name: "States", abv: "St", route: "states" },
      { name: "Animations", abv: "An", route: "animations" }
    ]));
    this.toolsList.push(this.createToolMenu("EVENTS", "bolt", [
      { name: "Hubs", abv: "Co", route: "hubs" },
      { name: "Events", abv: "Be", route: "events" },
      { name: "Messages", abv: "Br", route: "messages" }
    ]));
    this.toolsList.push(this.createToolMenu("ENVIRONMENTS", "architecture", [
      { name: "Maps", abv: "Ma", route: "maps" },
      { name: "TileSets", abv: "Ti", route: "tilesets" }
    ]));
    this.toolsList.push(this.createToolMenu("INTERFACES", "branding_watermark", [
      { name: "Huds", abv: "Hu", route: "huds" },
      { name: "Elements", abv: "El", route: "hudelements" },
      { name: "Menus", abv: "Me", route: "hudmenus" },
      { name: "Dialogs", abv: "Di", route: "huddialogs" }
    ]));
    this.toolsList.push(this.createToolMenu("SOUNDS", "equalizer", [
      { name: "Sound Sets", abv: "Se", route: "soundsets" },
      { name: "Sound Sources", abv: "So", route: "soundsources" }
    ]));
  }

  ngOnInit(): void {
  }
  
  public createToolMenu(name: string, icon: string, items: any[]): ToolMenu {
    var menu = new ToolMenu();
    menu.name = name;
    menu.icon = icon;

    items.forEach((value) => {
      menu.items.push(this.createToolMenuItem(value.name, value.abv, value.route));
    });

    return menu;
  }

  public createToolMenuItem(name: string, abv: string, route: string): ToolMenuItem {
    var menuItem = new ToolMenuItem();
    menuItem.name = name;
    menuItem.route = route;
    menuItem.plateText = abv;

    return menuItem;
  }

}
