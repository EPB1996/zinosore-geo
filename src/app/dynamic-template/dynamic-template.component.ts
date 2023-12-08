import {Component, HostListener} from '@angular/core';
import {KonamiService} from "../konami/konami.service";

@Component({
  selector: 'app-dynamic-template',
  templateUrl: './dynamic-template.component.html',
  styleUrls: ['./dynamic-template.component.scss']
})
export class DynamicTemplateComponent {
  constructor(private konamiService: KonamiService) {}

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (this.konamiService.checkCode(event.keyCode)) {
     window.location.href = 'https://reseauactionclimat.org/urgence-climatique/';    }
  }
}
