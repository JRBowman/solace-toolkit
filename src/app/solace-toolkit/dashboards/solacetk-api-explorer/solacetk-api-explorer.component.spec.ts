import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolacetkApiExplorerComponent } from './solacetk-api-explorer.component';

describe('SolacetkApiExplorerComponent', () => {
  let component: SolacetkApiExplorerComponent;
  let fixture: ComponentFixture<SolacetkApiExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolacetkApiExplorerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolacetkApiExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
