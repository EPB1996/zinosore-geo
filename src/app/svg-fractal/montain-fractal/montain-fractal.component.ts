import { Component } from '@angular/core';
import { Line, LineModel } from '../line';

@Component({
  selector: 'app-montain-fractal',
  templateUrl: './montain-fractal.component.html',
  styleUrls: ['./montain-fractal.component.scss']
})
export class MontainFractalComponent {
  height: number = 500;
  width: number = 500;
  lines: Line[] = [];

  constructor() {
    this.snowflake(250, 300, 250, 100, 150, 5); 
  }

  snowflake(x1: number, y1: number, x2: number, y2: number, length: number, depth: number) {
    if (depth === 0) {
      return;
    }

    const angle = (2 * Math.PI) / 6; 
    
    for (let i = 0; i < 6; i++) {
      const newX1 = x1 + length * Math.cos(i * angle);
      const newY1 = y1 + length * Math.sin(i * angle);

      const newX2 = x1 + length * Math.cos((i + 1) * angle);
      const newY2 = y1 + length * Math.sin((i + 1) * angle);

      this.snowflake(newX1, newY1, newX2, newY2, length / 3, depth - 1);

      const color = this.calculateColor(depth);
      const newLine = new LineModel(newX1, newY1, newX2, newY2, color, 2);
      this.lines.push(newLine);
    }
  }

  calculateColor(depth: number): string {
    const maxDepth = 5;

    const red = Math.floor((255 / maxDepth) * depth);
    const green = Math.floor((255 / maxDepth) * depth);
    const blue = Math.floor((128 / maxDepth) * depth) + 128;

    return `rgb(${red}, ${green}, ${blue})`;
  }
}
