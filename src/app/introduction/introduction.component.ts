import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsoaUserService } from '../services/msoa-user-service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor(
    public router: Router, public msoaUserService: MsoaUserService) { }

  ngOnInit(): void {
  }

}
