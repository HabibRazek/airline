import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger } from '../model/passenger.model';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit{

constructor(private passengerService:PassengerService,private router:Router){}
public isloggedIn: Boolean = false;
passengers!:Passenger[];
username!:string;
password!:string;
errorMessage!:string;
public loggedUser!:string;
pass = new Passenger();


ngOnInit(): void {
  this.passengerService.listePassenger().subscribe((data)=>{
   this.passengers=data;
  
   
  })
}
SignIn(user:Passenger):Boolean {
    let validUser: Boolean = false;
    this.passengers.forEach((curUser) => {
    if(user.firstnamePassenger== curUser.firstnamePassenger && user.passwordPassenger==curUser.passwordPassenger) {
    validUser = true;
    this.loggedUser = curUser.firstnamePassenger;
    this.isloggedIn = true;
    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    
    
   } }); 
   return validUser;
} 
onLoggedin(){
   let isValidUser: Boolean = this.SignIn(this.pass);
  if (isValidUser)
  this.router.navigate(['/flights']);
  
  else
  alert('Login ou mot de passe incorrecte!'); 
  console.log(this.pass);
  }
  getLoggedUser() {
    return this.loggedUser;
  }
  logout() {
    this.isloggedIn= false;
    this.loggedUser = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    }
}
