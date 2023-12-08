import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme = new BehaviorSubject<string>('beach');
  theme$: Observable<string> = this.theme.asObservable();

  constructor() {}

  setTheme(theme: string) {
    this.theme.next(theme);
  }
}
