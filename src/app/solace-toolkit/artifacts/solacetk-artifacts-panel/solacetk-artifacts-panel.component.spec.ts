import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolacetkArtifactsPanelComponent } from './solacetk-artifacts-panel.component';

describe('SolacetkArtifactsPanelComponent', () => {
  let component: SolacetkArtifactsPanelComponent;
  let fixture: ComponentFixture<SolacetkArtifactsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolacetkArtifactsPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolacetkArtifactsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
