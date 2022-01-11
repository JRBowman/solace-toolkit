import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-resume-sheet',
  templateUrl: './resume-sheet.component.html',
  styleUrls: ['./resume-sheet.component.css']
})
export class ResumeSheetComponent implements OnInit {

  constructor(private _resumeSheetRef: MatBottomSheetRef<ResumeSheetComponent>) { }

  public form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.minLength(10), Validators.maxLength(12)]),
    message: new FormControl('', [Validators.minLength(2), Validators.maxLength(1250)]),
    reason: new FormControl('', [Validators.required])
  });

  getErrorMessage() {
    if (this.form.controls["email"].hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.controls["email"].hasError('email') ? 'Not a valid email' : '';
  }
  ngOnInit(): void {
  }

  public send(): void {
    console.log(this.form);
  }


}
