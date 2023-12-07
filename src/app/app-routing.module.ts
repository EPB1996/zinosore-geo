import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { SvgFractalComponent } from './svg-fractal/svg-fractal.component';
import { KonamiComponent } from './konami/konami.component';
import { DynamicTemplateComponent } from './dynamic-template/dynamic-template.component';

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'home', component: HomeComponent },
  { path: 'konami', component: KonamiComponent },
  { path: 'svg-fractal', component: SvgFractalComponent },
  { path: 'dynamic-template', component: DynamicTemplateComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Add default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
