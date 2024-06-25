import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolacetkMarkdownPanelComponent } from './solacetk-markdown-panel.component';

describe('SolacetkMarkdownPanelComponent', () => {
  let component: SolacetkMarkdownPanelComponent;
  let fixture: ComponentFixture<SolacetkMarkdownPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolacetkMarkdownPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolacetkMarkdownPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
