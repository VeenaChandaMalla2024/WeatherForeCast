import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BackendServiceService } from 'src/app/Services/backend-service.service';
@Component({
  selector: 'app-add-weather',
  templateUrl: './add-weather.component.html',
  styleUrls: ['./add-weather.component.css']
})
export class AddWeatherComponent {
weatherform:any;
  constructor(private http:BackendServiceService){}

  ngOnInit(){
    this.getWeatherDetails();
    this.weatherform=new FormGroup({
       id:new FormControl<number>(0),
       ForecastDate:new FormControl(null),
       ForecastTemperature:new FormControl(null),
    })
  }
  validate():boolean{
    if(!this.weatherform.controls.ForecastTemperature.value){
      alert("Please enter Temperature")
      return false;
    }
    if(!this.weatherform.controls.ForecastDate.value){
      alert("Please enter ForecastDate")
      return false;
    }
    return true;
  }
  addWeather(){
    if(this.validate()){
    this.http.postapi('api/Weather/SaveWeatherDetails',this.weatherform.getRawValue()).subscribe(res=>{
      alert('Data Saved Successfully');
      this.getWeatherDetails();
    })
  }
  }
  dateToday(): Date {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() ;
    const day = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    return new Date(year, month, day);
  }
  onChangeTemp(value:any){
    if(value.target.value>60){
      alert('Temperature should not be greater than 60');
      this.weatherform.get("ForecastTemperature").setValue(null);
    }
    else if(parseInt(value.target.value)<-60){
      alert('Temperature should not be less than -60');
      this.weatherform.get("ForecastTemperature").setValue(null);
    }
  }
  lstweatherdetails:any;
  getWeatherDetails(){
    this.http.getapi('api/Weather/GetAllWeatherDetails').subscribe(res=>{
         this.lstweatherdetails=res;
    })
  }

}
