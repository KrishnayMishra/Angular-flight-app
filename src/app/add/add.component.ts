import { Component, OnInit } from '@angular/core';
import { Flight} from '../model/flight.model';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  flight : Flight = new Flight();
  carriers : string[]=["Jet","Indigo","AirIndia","Vistara"];
  cities : string[]=["Mumbai","Pune","Goa","Delhi","Bengaluru"];

  constructor(private service : FlightService) {}
   

  ngOnInit(): void {
    
  }
  save(){
    this.service.addFlight(this.flight);
    
  }



}
