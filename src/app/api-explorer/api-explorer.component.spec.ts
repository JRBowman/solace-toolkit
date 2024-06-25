import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiExplorerComponent } from './api-explorer.component';

describe('ApiExplorerComponent', () => {
  let component: ApiExplorerComponent;
  let fixture: ComponentFixture<ApiExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiExplorerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
