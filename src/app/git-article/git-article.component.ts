import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'git-article',
  templateUrl: './git-article.component.html',
  styleUrls: ['./git-article.component.css']
})
export class GitArticleComponent implements OnInit {

  constructor() { }

  @Input() data: any;

  public showArticle: boolean = false;

  ngOnInit(): void {
  }

  public openArticle() {
      this.showArticle = !this.showArticle;
  }

}
