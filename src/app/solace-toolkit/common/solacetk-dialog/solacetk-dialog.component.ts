import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-solacetk-dialog',
  templateUrl: './solacetk-dialog.component.html',
  styleUrls: ['./solacetk-dialog.component.css']
})
export class SolacetkDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  @Input() title: string = "DialogTK";
  @Input() message: string = "_Content_";
  @Input() actions: DialogAction[] = [];

  @Input() model: any = {};
  @Output() modelChange = new EventEmitter<any>();

  ngOnInit(): void {
    if (this.data.title && this.data.title.length > 0) this.title = this.data.title;
    if (this.data.message && this.data.message.length > 0) this.message = this.data.message;
    if (this.data.actions) this.actions = this.data.actions;
    if (this.data.model) this.model = this.data.model;
  }

}

export class DialogAction {
  public name: string = "action";
  public method?: (() => any);
}
