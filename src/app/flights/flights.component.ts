import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight.model';
import { AuthService } from '../services/auth.service';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent implements OnInit {
  flights!: Flight[];
  destinationFlight!: string;
  allFlights!: Flight[];
  constructor(
    private flightService: FlightService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.flightService.listeFlight().subscribe((data) => {
      this.flights = data;
      console.log(this.flights);
    });
    this.flightService.listeFlight().subscribe((data) => {
      this.allFlights = data;
      console.log(this.flights);
    });
  }

  deletef(id: number) {
    this.flightService.supprimerFlight(id).subscribe((data) => {
      console.log(data);
      this.flightService.listeFlight().subscribe((data) => {
        this.flights = data;
        console.log(this.flights);
      });
    });
  }
  rechercherFlights() {
    this.flightService
      .rechercherParNom(this.destinationFlight)
      .subscribe((prods) => {
        this.flights = prods;
        console.log(prods);
      });
  }

  rechercherdes() {
    this.flightService
      .rechercherParNom(this.destinationFlight)
      .subscribe((data) => {
        console.log(data);
        this.flights = data;
      });
  }
  onKeyUp(filterText: string) {
    this.flights = this.allFlights.filter((item) =>
      item.destinationFlight.toLowerCase().includes(filterText)
    );
  }
}
