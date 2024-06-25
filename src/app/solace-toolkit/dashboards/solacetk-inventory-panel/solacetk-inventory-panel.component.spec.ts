import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolacetkInventoryPanelComponent } from './solacetk-inventory-panel.component';

describe('SolacetkInventoryPanelComponent', () => {
  let component: SolacetkInventoryPanelComponent;
  let fixture: ComponentFixture<SolacetkInventoryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolacetkInventoryPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolacetkInventoryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
