import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bow-socials',
  templateUrl: './bow-socials.component.html',
  styleUrls: ['./bow-socials.component.css']
})
export class BowSocialsComponent implements OnInit {

  constructor() { }

  @Input() facebook: string = "";
  @Input() linkedin: string = "";
  @Input() github: string = "";
  @Input() soundcloud: string = "";

  ngOnInit(): void {
  }

}
