import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ResumeSheetComponent } from './resume-sheet/resume-sheet.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private _resumeSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  openResumeSheet(): void {
    this._resumeSheet.open(ResumeSheetComponent);
  }

}
