import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight.model';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-recherche-par-destination',
  templateUrl: './recherche-par-destination.component.html',
  styleUrls: ['./recherche-par-destination.component.css']
})
export class RechercheParDestinationComponent implements OnInit {
    flights!:Flight[];
    allFlights! : Flight[];

    destinationFlight!:string;
    constructor(private flightService: FlightService){
  
    }
    
    ngOnInit(): void {
      this.flightService.listeFlight().subscribe((data)=>{
        this.allFlights=data;
        console.log(this.flights);
        
       })
       
  
     
    }
    deletef(id:number){
      this.flightService.supprimerFlight(id).subscribe((data)=>{
        console.log(data);
    this.flightService.listeFlight().subscribe((data)=>
      {
        this.flights=data;
        console.log(this.flights);
   
      });
    });} 
    rechercherdes(){
      this.flightService.rechercherParNom(this.destinationFlight).subscribe(data =>
        {
          console.log(data);
          this.flights=data;
        })
    }
    onKeyUp(filterText : string){
      this.flights = this.allFlights.filter(item =>
      item.destinationFlight.toLowerCase().includes(filterText));
      }
      
      
  
  }

