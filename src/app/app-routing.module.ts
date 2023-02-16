import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { AirlinesComponent } from './airlines/airlines.component';
import { FlightsComponent } from './flights/flights.component';
import { PassengersComponent } from './passengers/passengers.component';
import { UpdateAirlineComponent } from './update-airline/update-airline.component';
import { UpdatePassengerComponent } from './update-passenger/update-passenger.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { RechercheParDestinationComponent } from './recherche-par-destination/recherche-par-destination.component';
import { TicketavailableComponent } from './ticketavailable/ticketavailable.component';
import { AddTicketavailableComponent } from './add-ticketavailable/add-ticketavailable.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SearchnamepassComponent } from './searchnamepass/searchnamepass.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AirlineGuard } from './airline.guard';

const routes: Routes = [
  {
    path: 'passengers',
    component: PassengersComponent,
    canActivate: [AirlineGuard],
  },
  {
    path: 'add-passenger',
    component: AddPassengerComponent,
    canActivate: [AirlineGuard],
  },
  {
    path: 'updatepassenger/:id',
    component: UpdatePassengerComponent,
    canActivate: [AirlineGuard],
  },
  { path: 'airlines', component: AirlinesComponent },
  {
    path: 'add-airlines',
    component: AddAirlineComponent,
    canActivate: [AirlineGuard],
  },
  {
    path: 'updateairline/:id',
    component: UpdateAirlineComponent,
    canActivate: [AirlineGuard],
  },
  { path: 'flights', component: FlightsComponent },
  {
    path: 'add-flights',
    component: AddFlightComponent,
    canActivate: [AirlineGuard],
  },
  {
    path: 'updateflight/:id',
    component: UpdateFlightComponent,
    canActivate: [AirlineGuard],
  },
  { path: 'tickets', component: TicketsComponent },
  {
    path: 'add-tickets',
    component: AddTicketComponent,
    canActivate: [AirlineGuard],
  },
  {
    path: 'updateticket/:id',
    component: UpdateTicketComponent,
    canActivate: [AirlineGuard],
  },
  {
    path: 'rechercheParDestination',
    component: RechercheParDestinationComponent,
  },
  { path: 'ticketavailable/:id', component: TicketavailableComponent },
  {
    path: 'add-ticketavailable',
    component: AddTicketavailableComponent,
    canActivate: [AirlineGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AirlineGuard],
  },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'searchnamepass', component: SearchnamepassComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
