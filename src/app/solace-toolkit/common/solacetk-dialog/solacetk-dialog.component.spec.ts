import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolacetkDialogComponent } from './solacetk-dialog.component';

describe('SolacetkDialogComponent', () => {
  let component: SolacetkDialogComponent;
  let fixture: ComponentFixture<SolacetkDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolacetkDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolacetkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
