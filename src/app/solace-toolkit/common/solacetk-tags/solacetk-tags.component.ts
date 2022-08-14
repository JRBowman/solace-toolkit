import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipSelectionChange } from '@angular/material/chips';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'solacetk-tags',
  templateUrl: './solacetk-tags.component.html',
  styleUrls: ['./solacetk-tags.component.css']
})
export class SolacetkTagsComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCrtl = new FormControl('');
  filteredTags!: Observable<string[]>;
  tags: string[] = [];
  allTags: string[] = ['#player', '#controller', '#core'];

  @Input() model: string = "";
  @Output() modelChange = new EventEmitter<string>();

  @Output() tagsChange = new EventEmitter<string[]>();
  @Output() tagClick = new EventEmitter<string>();

  @Input() canEdit: boolean = true;

  @ViewChild('tagInput') tagInput!: ElementRef<HTMLInputElement>;
  constructor() { }

  ngOnInit(): void {
    if (this.model.length > 0) {
      console.log(this.model);
      this.tags = this.model.split(" ");
    }

    this.modelChange.subscribe((next) => {
      console.log(this.model);
      if (this.model && this.model.length > 0) this.tags = this.model.split(" ");
    });

    this.filteredTags = this.tagCrtl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => (tag ? this._filter(tag) : this.allTags.slice())),
    );

    this.updateTags();
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
    this.updateTags();

    this.tagCrtl.setValue(null);
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
      this.updateTags();
    }
  }

  updateTags(): void {
    this.model = this.tags.join(" ");
    this.modelChange.emit(this.model);
    this.tagsChange.emit(this.tags);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagCrtl.setValue(null);
    this.updateTags();
  }

  public chipClick(chip: string): void {
    console.log(chip);
    this.tagClick.emit(chip);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(tag => tag.toLowerCase().includes(filterValue));
  }

}
