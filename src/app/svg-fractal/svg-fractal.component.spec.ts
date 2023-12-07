import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgFractalComponent } from './svg-fractal.component';

describe('SvgFractalComponent', () => {
  let component: SvgFractalComponent;
  let fixture: ComponentFixture<SvgFractalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgFractalComponent]
    });
    fixture = TestBed.createComponent(SvgFractalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
