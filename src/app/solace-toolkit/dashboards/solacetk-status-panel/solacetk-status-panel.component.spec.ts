import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolacetkStatusPanelComponent } from './solacetk-status-panel.component';

describe('SolacetkStatusPanelComponent', () => {
  let component: SolacetkStatusPanelComponent;
  let fixture: ComponentFixture<SolacetkStatusPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolacetkStatusPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolacetkStatusPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
