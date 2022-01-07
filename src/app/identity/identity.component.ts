import { Component, OnInit } from '@angular/core';
import { MsoaUserService } from '../services/msoa-user-service';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css']
})
export class IdentityComponent implements OnInit {

  constructor(public msoaUserService: MsoaUserService) { }

  ngOnInit(): void {
  }

}
