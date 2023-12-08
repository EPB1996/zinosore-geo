import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { KonamiComponent } from './konami/konami.component';
import { DynamicTemplateComponent } from './dynamic-template/dynamic-template.component';
import { WaveFractalComponent } from './svg-fractal/wave-fractal/wave-fractal.component';
import { MontainFractalComponent } from './svg-fractal/montain-fractal/montain-fractal.component';
import { TreeFractalComponent } from './svg-fractal/tree-fractal/tree-fractal.component';
import { SvgFractalComponent } from './svg-fractal/svg-fractal.component';
@NgModule({
  declarations: [AppComponent, MapComponent, HomeComponent, KonamiComponent, DynamicTemplateComponent, WaveFractalComponent, MontainFractalComponent, TreeFractalComponent,SvgFractalComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
