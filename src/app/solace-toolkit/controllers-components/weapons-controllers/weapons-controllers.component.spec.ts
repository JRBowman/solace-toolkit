import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponsControllersComponent } from './weapons-controllers.component';

describe('WeaponsControllersComponent', () => {
  let component: WeaponsControllersComponent;
  let fixture: ComponentFixture<WeaponsControllersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponsControllersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponsControllersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
