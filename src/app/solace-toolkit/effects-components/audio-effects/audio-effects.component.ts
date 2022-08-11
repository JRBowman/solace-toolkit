import { Component, OnInit } from '@angular/core';
import { Audioeffect } from '../../models/audioeffect';

@Component({
  selector: 'app-audio-effects',
  templateUrl: './audio-effects.component.html',
  styleUrls: ['./audio-effects.component.css']
})
export class AudioEffectsComponent implements OnInit {

  constructor() { }

  public model: Audioeffect = new Audioeffect();

  ngOnInit(): void {
  }

}
