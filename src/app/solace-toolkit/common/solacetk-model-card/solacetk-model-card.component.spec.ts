import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolacetkModelCardComponent } from './solacetk-model-card.component';

describe('SolacetkModelCardComponent', () => {
  let component: SolacetkModelCardComponent;
  let fixture: ComponentFixture<SolacetkModelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolacetkModelCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolacetkModelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
