import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme: string = 'Forest';

  constructor() {}

  setTheme(theme: string) {
    this.theme = theme;
  }
}
