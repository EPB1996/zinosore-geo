import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontainFractalComponent } from './montain-fractal.component';

describe('MontainFractalComponent', () => {
  let component: MontainFractalComponent;
  let fixture: ComponentFixture<MontainFractalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MontainFractalComponent]
    });
    fixture = TestBed.createComponent(MontainFractalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
