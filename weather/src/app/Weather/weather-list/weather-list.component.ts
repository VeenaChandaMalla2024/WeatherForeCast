import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BackendServiceService } from 'src/app/Services/backend-service.service';
import {WeatherList} from 'src/app/Model/weatherlist.model';
@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent {
  lstweatherdata: WeatherList[] = [];
weatherform:any;
  constructor(private http:BackendServiceService){}

  ngOnInit(){
    this.weatherform=new FormGroup({
       id:new FormControl<number>(0),
       ForecastDate:new FormControl(null),
       ForecastToDate:new FormControl(null),
    })
  }
  getWeatherDetails(){
    this.http.postapi('api/Weather/GetWeatherDetailsBySearch',this.weatherform.getRawValue()).subscribe(res=>{
     this.lstweatherdata=res;
    })
  }
}
