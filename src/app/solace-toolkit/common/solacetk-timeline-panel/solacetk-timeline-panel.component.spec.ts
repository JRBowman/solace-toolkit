import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolacetkTimelinePanelComponent } from './solacetk-timeline-panel.component';

describe('SolacetkTimelinePanelComponent', () => {
  let component: SolacetkTimelinePanelComponent;
  let fixture: ComponentFixture<SolacetkTimelinePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolacetkTimelinePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolacetkTimelinePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
