import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatLegacyAutocompleteSelectedEvent as MatAutocompleteSelectedEvent } from '@angular/material/legacy-autocomplete';
import { MatLegacyChipInputEvent as MatChipInputEvent } from '@angular/material/legacy-chips';
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

  //TODO: Update this to pull from a cache or DB for new entires and filter to a only last pick.
  allTags: string[] = [];

  @Input() model: string = "";
  @Output() modelChange = new EventEmitter<string>();

  @Output() tagsChange = new EventEmitter<string[]>();
  @Output() tagClick = new EventEmitter<string>();

  @Input() tkHeading: string = "Tags";
  @Input() canEdit: boolean = true;

  @ViewChild('tagInput') tagInput!: ElementRef<HTMLInputElement>;
  constructor() { }

  ngOnInit(): void {
    if (this.model.length > 0) {
      this.tags = this.model.split(" ");
    }

    this.modelChange.subscribe((next) => {
      if (this.model && this.model.length > 0) this.tags = this.model.split(" ");
    });

    this.filteredTags = this.tagCrtl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => (tag ? this._filter(tag) : this.allTags.slice())),
    );

    this.updateTags();
  }

  public add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) this.tags.push(value);

    event.chipInput!.clear();
    this.updateTags();
    this.tagCrtl.setValue(null);
  }

  public remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
      this.updateTags();
    }
  }

  public updateTags(): void {
    this.model = this.tags.join(" ");
    this.modelChange.emit(this.model);
    this.tagsChange.emit(this.tags);
  }

  public selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagCrtl.setValue(null);
    this.updateTags();
  }

  public chipClick(chip: string): void {
    this.tagClick.emit(chip);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(tag => tag.toLowerCase().includes(filterValue));
  }

}
