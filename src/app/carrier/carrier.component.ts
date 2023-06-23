import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight.model';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.css']
})
export class CarrierComponent implements OnInit{
  flights: Flight[]= [];
  carriers : string[]= ["Jet","Indigo","AirIndia","Vistara"];
  car : string="";

  constructor(private service : FlightService){}

  ngOnInit(): void {
    
  }
  findByCarrier()
  {
    var temp=this.service.findByCarrier(this.car);
    if(temp!=null)
    this.flights=temp;
     
  }

}
