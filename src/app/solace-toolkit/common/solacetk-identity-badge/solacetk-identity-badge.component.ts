import { Component, OnInit } from '@angular/core';
import { MsoaUserService } from 'src/app/services/msoa-user-service';

@Component({
  selector: 'solacetk-identity-badge',
  templateUrl: './solacetk-identity-badge.component.html',
  styleUrls: ['./solacetk-identity-badge.component.css']
})
export class SolacetkIdentityBadgeComponent implements OnInit {

  constructor(public msoaUserService: MsoaUserService) { }

  ngOnInit(): void {
  }

}
