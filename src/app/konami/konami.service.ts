import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KonamiService {
  private cursor = 0;
  private readonly KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Vous pouvez ajuster la séquence ici

  checkCode(keyCode: number): boolean {
    this.cursor = keyCode === this.KONAMI_CODE[this.cursor] ? this.cursor + 1 : 0;
    return this.cursor === this.KONAMI_CODE.length;
  }
}

