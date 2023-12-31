import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { KonamiComponent } from './konami/konami.component';
import { DynamicTemplateComponent } from './dynamic-template/dynamic-template.component';
import { WindowComponent } from './map/window/window.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './dynamic-template/header/header.component';
import { FooterComponent } from './dynamic-template/footer/footer.component';
import { BodyComponent } from './dynamic-template/body/body.component';
import { WaveFractalComponent } from './svg-fractal/wave-fractal/wave-fractal.component';
import { MontainFractalComponent } from './svg-fractal/montain-fractal/montain-fractal.component';
import { TreeFractalComponent } from './svg-fractal/tree-fractal/tree-fractal.component';
import { SvgFractalComponent } from './svg-fractal/svg-fractal.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    KonamiComponent,
    SvgFractalComponent,
    DynamicTemplateComponent,
    WindowComponent,
    KonamiComponent,
    SvgFractalComponent,
    DynamicTemplateComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AppComponent, MapComponent, HomeComponent, KonamiComponent, DynamicTemplateComponent, WaveFractalComponent, MontainFractalComponent, TreeFractalComponent,SvgFractalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
