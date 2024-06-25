import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolacetkGraphObjectComponent } from './solacetk-graph-object.component';

describe('SolacetkGraphObjectComponent', () => {
  let component: SolacetkGraphObjectComponent;
  let fixture: ComponentFixture<SolacetkGraphObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolacetkGraphObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolacetkGraphObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
