import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveFractalComponent } from './wave-fractal.component';

describe('WaveFractalComponent', () => {
  let component: WaveFractalComponent;
  let fixture: ComponentFixture<WaveFractalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaveFractalComponent]
    });
    fixture = TestBed.createComponent(WaveFractalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
