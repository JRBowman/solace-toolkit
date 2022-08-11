import { Component, OnInit } from '@angular/core';
import { SoundSource } from '../../models/soundsource';

@Component({
  selector: 'app-sound-sources',
  templateUrl: './sound-sources.component.html',
  styleUrls: ['./sound-sources.component.css']
})
export class SoundSourcesComponent implements OnInit {

  constructor() { }

  public model: SoundSource = new SoundSource();

  ngOnInit(): void {
  }

}
