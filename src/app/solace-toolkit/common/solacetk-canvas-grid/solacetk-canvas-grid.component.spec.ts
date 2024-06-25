import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolacetkCanvasGridComponent } from './solacetk-canvas-grid.component';

describe('SolacetkCanvasGridComponent', () => {
  let component: SolacetkCanvasGridComponent;
  let fixture: ComponentFixture<SolacetkCanvasGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolacetkCanvasGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolacetkCanvasGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
