import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWeatherComponent } from './Weather/add-weather/add-weather.component';
import { WeatherListComponent } from './Weather/weather-list/weather-list.component';

const routes: Routes = [{path:'weather',component:AddWeatherComponent},{
  path:'weatherlist',component:WeatherListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
