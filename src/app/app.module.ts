import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { KonamiComponent } from './konami/konami.component';
import { SvgFractalComponent } from './svg-fractal/svg-fractal.component';
import { DynamicTemplateComponent } from './dynamic-template/dynamic-template.component';

@NgModule({
  declarations: [AppComponent, MapComponent, HomeComponent, KonamiComponent, SvgFractalComponent, DynamicTemplateComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
