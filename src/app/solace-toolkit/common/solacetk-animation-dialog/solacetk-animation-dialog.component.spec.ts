import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolacetkAnimationDialogComponent } from './solacetk-animation-dialog.component';

describe('SolacetkAnimationDialogComponent', () => {
  let component: SolacetkAnimationDialogComponent;
  let fixture: ComponentFixture<SolacetkAnimationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolacetkAnimationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolacetkAnimationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
