import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { WildfireService } from './service/wildfire.service';

import { WindowComponent } from './window/window.component';
import { MatDialog } from '@angular/material/dialog';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  private map: any;
  private departmentLayer: L.Layer | null = null;

  constructor(
    private fireService: WildfireService,
    private themeService: ThemeService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.map = L.map('map').setView([46.6031, 1.8904], 5);
    this.updateDepartments(2000);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    const bounds = L.latLngBounds(L.latLng(41, -5), L.latLng(51, 10));

    this.map.setMaxBounds(bounds);
    this.map.on('drag', () =>
      this.map.panInsideBounds(bounds, { animate: false })
    );
    this.map.options.minZoom = this.map.getZoom();

    this.addZoomButton();
    this.addSlider();

    this.addEventListenersToSlider();
  }

  private addEventListenersToSlider() {
    let slider = <HTMLInputElement>document.getElementById('years');

    slider.addEventListener('change', (event) => {
      let value = (<HTMLInputElement>event.target).value;
      this.updateDepartments(Number.parseInt(value)); // Logs the current value of the slider
    });
  }

  private updateDepartments(selectedYear: number) {
    this.map.eachLayer((layer: any) => {
      this.map.removeLayer(layer);
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    this.fireService.getFireData(2023).forEach((region: any) => {
      this.departmentLayer = L.geoJSON(region).addTo(this.map);
    });
  }

  private addSlider() {
    let sliderControl = new L.Control({ position: 'topright' });

    sliderControl.onAdd = (map: L.Map) => {
      let div = L.DomUtil.create(
        'div',
        'leaflet-control leaflet-bar leaflet-control-zoom-max'
      );
      div.innerHTML =
        '<input type="range" min="2000" max="2023" value="2000" class="slider" id="years">';

      L.DomEvent.on(div, 'click', (e): void => {
        L.DomEvent.preventDefault(e);
        this.zoomToMax();
      });
      return div;
    };

    sliderControl.addTo(this.map);
  }

    private addZoomButton() {
    let zoomMaxControl = new L.Control({ position: 'topleft' });

    zoomMaxControl.onAdd = (map: L.Map) => {
      let div = L.DomUtil.create(
        'div',
        'leaflet-control leaflet-bar leaflet-control-zoom-max'
      );
      div.innerHTML = '<a href="#" title="" to Max" role="button">Zoom</a>';

      L.DomEvent.on(div, 'click', (e): void => {
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

  public showInformation(): void {
    let dialogRef = this.dialog.open(WindowComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(() => {});
  }

  public callTheme(theme: string) {
    this.themeService.setTheme(theme);
  }
}
