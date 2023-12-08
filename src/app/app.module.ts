import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { KonamiComponent } from './konami/konami.component';
import { SvgFractalComponent } from './svg-fractal/svg-fractal.component';
import { DynamicTemplateComponent } from './dynamic-template/dynamic-template.component';
import { HeaderComponent } from './dynamic-template/header/header.component';
import { FooterComponent } from './dynamic-template/footer/footer.component';
import { BodyComponent } from './dynamic-template/body/body.component';

@NgModule({
  declarations: [AppComponent, MapComponent, HomeComponent, KonamiComponent, SvgFractalComponent, DynamicTemplateComponent, HeaderComponent, FooterComponent, BodyComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
