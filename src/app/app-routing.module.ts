import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { SvgFractalComponent } from './svg-fractal/svg-fractal.component';
import { KonamiComponent } from './konami/konami.component';
import { DynamicTemplateComponent } from './dynamic-template/dynamic-template.component';
import {WindowComponent} from "./map/window/window.component";

const routes: Routes = [

  { path: 'dynamic-template', component: DynamicTemplateComponent },
  { path: '', redirectTo: 'dynamic-template', pathMatch: 'full' }, // Add default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
