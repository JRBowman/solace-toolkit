import { Component, ViewEncapsulation } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private markdownService: MarkdownService) {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});
    }, 1);
   }
  title = 'Solace Toolkit (TK) for Game Development';
  time = new Date().toLocaleTimeString();
}
