import { Component } from '@angular/core';
import { Line, LineModel } from '../line';

@Component({
  selector: 'app-tree-fractal',
  templateUrl: './tree-fractal.component.html',
  styleUrls: ['./tree-fractal.component.scss'],
})
export class TreeFractalComponent {
  height: number = 500;
  width: number = 500;
  lines: Line[] = [];

  constructor() {
    this.branch(250, 450, 250, 300, 20, 14, Math.PI / 2);
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

    const maxLength = 40;
    const minLength = 10; 
    const length = minLength + (maxLength - minLength) * (depth / 14);
    const color = this.calculateColor(depth);
    const newLine = new LineModel(x1, y1, x2, y2, color, width);
    this.lines.push(newLine);

    const newX = x2 + length * Math.cos(angle);
    const newY = y2 - length * Math.sin(angle);

    this.branch(x2, y2, newX, newY, width * 0.6, depth - 1, angle - Math.PI / 6);
    this.branch(x2, y2, newX, newY, width * 0.6, depth - 1, angle + Math.PI / 6);
  }

  calculateColor(depth: number): string {
    const maxDepth = 14;

    const red = Math.floor((101 / maxDepth) * depth) + 43;
    const green = Math.floor((86 / maxDepth) * (maxDepth - depth)) + 69;
    const blue = Math.floor((43 / maxDepth) * (maxDepth - depth)) + 19;

    return `rgb(${red}, ${green}, ${blue})`;
  }
}
