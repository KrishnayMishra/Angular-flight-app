import { Injectable } from '@angular/core';
import { Flight } from '../model/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
   flights : Flight[]=[];

  constructor() { }

  addFlight(f : Flight){
     this.flights.push(f);
   // this.http.post(AlbumService.baseUri + "/album", a).subscribe(data => data=a);
  }

  findByCarrier(car:string)
  {
      return this.flights.filter(f=>f.carrier==car);
  }
  
}
