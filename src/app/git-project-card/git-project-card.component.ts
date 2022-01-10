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
  @Input() gitClone: string = "git-client://clone?repo=https%3A%2F%2Fgithub.com%2FJRBowman%2Fansible-winset";
  @Input() sourceType: number = 0;
  // 0 = GitHub,
  // 1 = AzureDevOps

  ngOnInit(): void {
  }

}
