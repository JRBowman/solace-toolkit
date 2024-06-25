import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueEntryComponent } from './dialogue-entry.component';

describe('DialogueEntryComponent', () => {
  let component: DialogueEntryComponent;
  let fixture: ComponentFixture<DialogueEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogueEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
