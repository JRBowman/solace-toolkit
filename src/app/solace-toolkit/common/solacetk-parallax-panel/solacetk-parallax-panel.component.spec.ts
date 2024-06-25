import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolacetkParallaxPanelComponent } from './solacetk-parallax-panel.component';

describe('SolacetkParallaxPanelComponent', () => {
  let component: SolacetkParallaxPanelComponent;
  let fixture: ComponentFixture<SolacetkParallaxPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolacetkParallaxPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolacetkParallaxPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
