import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolacetkArtifactPanelComponent } from './solacetk-artifact-panel.component';

describe('SolacetkArtifactPanelComponent', () => {
  let component: SolacetkArtifactPanelComponent;
  let fixture: ComponentFixture<SolacetkArtifactPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolacetkArtifactPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolacetkArtifactPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
