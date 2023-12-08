import { Component } from '@angular/core';
import { Line, LineModel } from '../line';

@Component({
  selector: 'app-wave-fractal',
  templateUrl: './wave-fractal.component.html',
  styleUrls: ['./wave-fractal.component.scss']
})
export class WaveFractalComponent {
  height: number = 500;
  width: number = 500;
  lines: Line[] = [];

  constructor() {
    this.branch(300, 250, 350, 250,  8, 50, Math.PI / 6);
  }

  branch(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    width: number,
    depth: number,
    angle: number
  ) {
    if (depth === 0) {
      return;
    }

    const maxLength = 20; 
    const minLength = 5; 
    let length = minLength + (maxLength - minLength) * (depth / 6);
    
   
    
    const curvature = 0.9; 
    const color = this.calculateColor(depth);
    const newLine = new LineModel(x1, y1, x2, y2, color, width);
    this.lines.push(newLine);

    const newX = x2 + length * Math.cos(angle);
    const newY = y2 - length * Math.sin(angle);

    const newAngle = angle + curvature;

    this.branch(x2, y2, newX, newY, width * 0.97, depth - 1, newAngle);
  }

  calculateColor(depth: number): string {
    const maxDepth = 40;

    const red = Math.floor((255 / maxDepth) * depth);
    const green = Math.floor((150 / maxDepth) * depth);
    const blue = Math.floor((150 / maxDepth) * depth);

    return `rgb(${red}, ${green}, ${blue})`;
  }
}
