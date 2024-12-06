import { Component, OnInit } from "@angular/core";
import { Personaje } from '../interface/personaje.interface';

@Component({
  selector: 'app-dbz-main-name',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent implements OnInit{
  public personajes: Personaje[]=[
    {
      nombre:"Goku",
      fuerza:5000
    },
    {
      nombre:"Krilin",
      fuerza:120
    },
    {
      nombre:"Goku",
      fuerza:5000
    },
    {
      nombre:"Krilin",
      fuerza:120
    },
    {
      nombre:"Goku",
      fuerza:5000
    },
    {
      nombre:"Krilin",
      fuerza:120
    },
    {
      nombre:"Goku",
      fuerza:5000
    },
    {
      nombre:"Krilin",
      fuerza:120
    }
  ];

  public onNewPersonaje(personaje:Personaje):void{
    // console.log('MainPage');
    // console.log(personaje);

    this.personajes.push(personaje);
  }

  public onDelPersonaje(personaje:Personaje):void{
    // console.log('MainPage');
    // console.log(personaje);

    if(this.personajes.length>0){

      this.personajes.reduce(personaje);
    }
  }

  constructor(){}

  ngOnInit() { }
}
