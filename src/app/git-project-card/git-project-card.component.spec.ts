import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitProjectCardComponent } from './git-project-card.component';

describe('GitProjectCardComponent', () => {
  let component: GitProjectCardComponent;
  let fixture: ComponentFixture<GitProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitProjectCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
