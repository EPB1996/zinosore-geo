import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Control as LeafletControl } from 'leaflet';
import {WindowComponent} from "./window/window.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  private map: any;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.map = L.map('map').setView([46.6031, 1.8904], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    const bounds = L.latLngBounds(
      L.latLng(41, -5),
      L.latLng(51, 10)
    );

    this.map.setMaxBounds(bounds);
    this.map.on('drag', () => this.map.panInsideBounds(bounds, { animate: false }));
    this.map.options.minZoom = this.map.getZoom();

    this.map.getContainer().classList.add('grayscale');

    let zoomMaxControl: L.Control = new LeafletControl({ position: 'topleft' });

    zoomMaxControl.onAdd = (map: L.Map) => {
      let div: HTMLDivElement = L.DomUtil.create('div', 'leaflet-control leaflet-bar leaflet-control-zoom-max');
      div.innerHTML = '<a href="#" title="Zoom to Max" role="button">Zoom</a>';

      L.DomEvent.on(div, 'click', (e):void => {
        L.DomEvent.preventDefault(e);
        this.zoomToMax();
      });
      return div;
    };

    zoomMaxControl.addTo(this.map);

    let information: L.Control = new LeafletControl({ position: 'topleft' });

    information.onAdd = (map: L.Map) => {
      let div: HTMLDivElement = L.DomUtil.create('div', 'leaflet-control leaflet-bar leaflet-control-zoom-max');
      div.innerHTML = '<a href="#" title="Information" role="button">Info</a>';

      L.DomEvent.on(div, 'click', (e): void => {
        L.DomEvent.preventDefault(e);
        this.showInformation();
      });

      map.on('click', (e): void => {
        if (this.dialog.openDialogs.length > 0) {
          this.dialog.closeAll();
        }
      });

      L.DomEvent.disableClickPropagation(div);

      return div;
    };
    
    information.addTo(this.map);

  }
  private zoomToMax():void {
    const minZoom = this.map.getMinZoom();
    this.map.setZoom(minZoom);
  }

  public showInformation(): void {
    let dialogRef= this.dialog.open(WindowComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {})
  }


}
