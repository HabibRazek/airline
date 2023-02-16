import { Component, OnInit } from '@angular/core';
import { Airline } from '../model/airline.model';
import { AirlineService } from '../services/airline.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css']
})
export class AirlinesComponent implements OnInit {
airlines!:Airline[];
AllAirlines!:Airline[];
nameAirline!:string;
constructor(private airlineService : AirlineService,
  public authService: AuthService){
}
  ngOnInit(): void {

    this.airlineService.listeAirline().subscribe((data)=>{ this.airlines=data;
      console.log(this.airlines);
})
    
this.airlineService.listeAirline().subscribe((data)=>{
  this.AllAirlines=data;
  console.log(this.airlines);
  
 })
    
    
    
    }
     deletea(id:number){
      this.airlineService.supprimerAirline(id).subscribe((data)=>{
        console.log(data);
    this.airlineService.listeAirline().subscribe((data)=>
      {
        this.airlines=data;
        console.log(this.airlines);
   
      });
    });}

    rechercherdes(){
      this.airlineService.rechercherParNom(this.nameAirline).subscribe(data =>
        {
          console.log(data);
          this.airlines=data;
        })
    }
    onKeyUp(filterText : string){
      this.airlines = this.AllAirlines.filter(item =>
      item.nameAirline.toLowerCase().includes(filterText));
      }
  
  }
  
      
  