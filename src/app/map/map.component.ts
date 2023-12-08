import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { WildfireService } from './service/wildfire.service';
import { Control as LeafletControl } from 'leaflet';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  private map: any;

  constructor(private fireService: WildfireService) {}

  ngOnInit(): void {
    this.map = L.map('map').setView([46.6031, 1.8904], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    this.fireService.getFireData(2000).forEach((region: any) => {
      console.log(region);
      L.geoJSON(region).addTo(this.map);
    });

    const bounds = L.latLngBounds(L.latLng(41, -5), L.latLng(51, 10));

    this.map.setMaxBounds(bounds);
    this.map.on('drag', () =>
      this.map.panInsideBounds(bounds, { animate: false })
    );
    this.map.options.minZoom = this.map.getZoom();

    this.resetZoomButton();

  }

  private resetZoomButton() {
    let zoomMaxControl = new LeafletControl({ position: 'topleft' });

    zoomMaxControl.onAdd = (map: L.Map) => {
      let div = L.DomUtil.create(
        'div',
        'leaflet-control leaflet-bar leaflet-control-zoom-max'
      );
      div.innerHTML = '<a href="#" title="Zoom to Max" role="button">Zoom</a>';

      L.DomEvent.on(div, 'click', (e) => {
        L.DomEvent.preventDefault(e);
        this.zoomToMax();
      });
      return div;
    };

    zoomMaxControl.addTo(this.map);
  }

  private zoomToMax(): void {
    const minZoom = this.map.getMinZoom();
    this.map.setZoom(minZoom);
  }
}
