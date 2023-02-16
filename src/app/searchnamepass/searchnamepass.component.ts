import { Component } from '@angular/core';
import { Passenger } from '../model/passenger.model';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-searchnamepass',
  templateUrl: './searchnamepass.component.html',
  styleUrls: ['./searchnamepass.component.css'],
})
export class SearchnamepassComponent {
  passengers!: Passenger[];
  cinPassenger!: string;
  allPassengers!: Passenger[];
  constructor(private passengerService: PassengerService) {}
  ngOnInit(): void {
    this.passengerService.listePassenger().subscribe((data) => {
      this.passengers = data;
      console.log(this.passengers);
    });

    this.passengerService.listePassenger().subscribe((data) => {
      this.allPassengers = data;
      console.log(this.passengers);
    });
  }
  deletep(id: number) {
    this.passengerService.supprimerPassenger(id).subscribe((data) => {
      console.log(data);
      this.passengerService.listePassenger().subscribe((data) => {
        this.passengers = data;
        console.log(this.passengers);
      });
    });
  }
  rechercherdes() {
    this.passengerService
      .getPssengerBycinPassenger(this.cinPassenger)
      .subscribe((data) => {
        console.log(data);
        this.passengers = data;
      });
  }
  onKeyUp(filterText: string) {
    this.passengers = this.allPassengers.filter((item) =>
      item.cinPassenger.toLowerCase().includes(filterText)
    );
  }
}
