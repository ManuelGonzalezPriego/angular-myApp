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

  //Creamos el ondelete que borrar en la lista padre el elemento y mediante el imput en el main lo mandaremos al modulo
  //lista
  public onDelPersonaje(personaje:Personaje):void{
    // console.log('MainPage');
    // console.log(personaje);
    const indice:number=(this.personajes.indexOf(personaje));
    if(indice!==-1){
      this.personajes.splice(indice,1);
    }
  }

  constructor(){}

  ngOnInit() { }
}
