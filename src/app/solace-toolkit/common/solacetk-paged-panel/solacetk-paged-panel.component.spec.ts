import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolacetkPagedPanelComponent } from './solacetk-paged-panel.component';

describe('SolacetkPagedPanelComponent', () => {
  let component: SolacetkPagedPanelComponent;
  let fixture: ComponentFixture<SolacetkPagedPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolacetkPagedPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolacetkPagedPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
