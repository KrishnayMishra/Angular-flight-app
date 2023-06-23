import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight.model';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  flights : Flight[]=[];
  constructor(private service : FlightService){}

  ngOnInit(): void {
    
  }

  delete(code: number)
  {
    
  }


}
