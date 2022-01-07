import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewJsComponent } from './overview-js.component';

describe('OverviewJsComponent', () => {
  let component: OverviewJsComponent;
  let fixture: ComponentFixture<OverviewJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
