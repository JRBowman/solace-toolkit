import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {

  constructor() { }

  public softwareArticles: any[] = [
      {
          link: 'https://raw.githubusercontent.com/JRBowman/ansible-winset/master/README.md',
          name: 'Ansible for Windows Collection',
          author: 'JRBowman',
          revision: '0645183',
          date: 'Oct 22, 2020'
        }
    ];

  ngOnInit(): void {
  }

}
