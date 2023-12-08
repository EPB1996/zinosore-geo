import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeFractalComponent } from './tree-fractal.component';

describe('TreeFractalComponent', () => {
  let component: TreeFractalComponent;
  let fixture: ComponentFixture<TreeFractalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeFractalComponent]
    });
    fixture = TestBed.createComponent(TreeFractalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
