import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolacetkTilesetCanvasComponent } from './solacetk-tileset-canvas.component';

describe('SolacetkTilesetCanvasComponent', () => {
  let component: SolacetkTilesetCanvasComponent;
  let fixture: ComponentFixture<SolacetkTilesetCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolacetkTilesetCanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolacetkTilesetCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
