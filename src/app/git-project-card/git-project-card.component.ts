import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'git-project-card',
  templateUrl: './git-project-card.component.html',
  styleUrls: ['./git-project-card.component.css']
})
export class GitProjectCardComponent implements OnInit {

  constructor() { }
  
  @Input() gitUrl: string = "github.com";
  @Input() gitName: string = "JRBowman / ansible-winset";
  @Input() sourceType: number = 0;
  // 0 = GitHub,
  // 1 = AzureDevOps

  public gitClone: string = "git-client://clone?repo=";
  public vscodeClone: string = "vscode://vscode.git/clone?url="

  ngOnInit(): void {
    // Remove String Literal Markers:
    this.gitUrl = this.gitUrl.replace(/'/gm, "");
    //this.gitClone = this.gitClone.replace(/'/gm, "");

    this.gitClone += this.gitUrl;
    this.vscodeClone += this.gitUrl;
  }

}
