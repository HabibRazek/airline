import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../model/flight.model';
import { Passenger } from '../model/passenger.model';
import { Ticket } from '../model/ticket.model';
import { FlightService } from '../services/flight.service';
import { PassengerService } from '../services/passenger.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticketavailable',
  templateUrl: './ticketavailable.component.html',
  styleUrls: ['./ticketavailable.component.css']
})
export class TicketavailableComponent implements OnInit {
  tickets!:Ticket[];
  newTicket = new Ticket();
flights!:Flight[];
AllTickets!:Ticket[];
searchTerm!:string;
AllFlights!:Flight[];
value = localStorage.getItem('loggedUser');
fly!:Flight;
pass = new Passenger();
constructor(private ticketservice:TicketService,
  private router:Router,private flightService:FlightService,private activatedRoute: ActivatedRoute,
  private passengerService:PassengerService
  ){}


  ngOnInit(): void {
  
      this.ticketservice.listeTicket().subscribe(
        (data) => { this.tickets = data;
        
    })
     this.flightService.listeFlight().subscribe((data)=>{
      this.flights=data;
    });
  
    this.flightService.consulterFlight(this.activatedRoute.snapshot.params['id']).
      subscribe( tic =>{ this.fly= tic;
        
      } ) ;
   /*    this.passengerService.consulterPassenger(40).subscribe((data) => {
        this.pass = data;
        console.log(this.pass);
      }
      ); */
    /*   this.passengerService.getPssengerByfirstname("maher").subscribe((data) => {
        this.pass = data;
        console.log(data);
      }
      ); */
      

}

 setNbr( ticket:Ticket){
  ticket.status ="booked";
  ticket.nbrTicket--;
 /*  ticket.passenger=this.pass;
  console.log(ticket); */
}

modif(id : number){
  this.ticketservice.consulterTicket(id).subscribe(data =>  {this.setNbr(data),
    this.ticketservice.updateTicket(data).subscribe
    (data => {console.log(data); 
      window.location.reload();
});
  } )
  this.ticketservice.listeFlight().subscribe(prods => {
    console.log(prods);
    this.AllFlights = prods;
    });
    
} 
/* onKeyUp(filterText : string){
  this.flights = this.AllFlights.filter(item =>
  item.destinationFlight.toLowerCase().includes(filterText));
  } */


  









}
