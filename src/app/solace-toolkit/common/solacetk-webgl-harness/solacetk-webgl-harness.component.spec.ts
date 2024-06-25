import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolacetkWebglHarnessComponent } from './solacetk-webgl-harness.component';

describe('SolacetkWebglHarnessComponent', () => {
  let component: SolacetkWebglHarnessComponent;
  let fixture: ComponentFixture<SolacetkWebglHarnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolacetkWebglHarnessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolacetkWebglHarnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
