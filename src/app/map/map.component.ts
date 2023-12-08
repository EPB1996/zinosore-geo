import { Component } from '@angular/core';
import * as L from 'leaflet';
import { WildfireService } from './service/wildfire.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  map: any;

  constructor(private fireService: WildfireService) {}

  ngOnInit(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    this.fireService.getFireData(2022).forEach((region: any) => {
      console.log(region);
      L.polygon(region.geometry.coordinates, { color: 'red' }).addTo(this.map);
    });
  }
}
