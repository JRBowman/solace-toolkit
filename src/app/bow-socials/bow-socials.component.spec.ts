import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowSocialsComponent } from './bow-socials.component';

describe('BowSocialsComponent', () => {
  let component: BowSocialsComponent;
  let fixture: ComponentFixture<BowSocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BowSocialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BowSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
