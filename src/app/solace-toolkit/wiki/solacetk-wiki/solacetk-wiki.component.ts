import { Component, OnInit } from '@angular/core';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'app-solacetk-wiki',
  templateUrl: './solacetk-wiki.component.html',
  styleUrls: ['./solacetk-wiki.component.css']
})
export class SolacetkWikiComponent implements OnInit {

  constructor(public service: SolacetkService) { }

  ngOnInit(): void {
  }

}
